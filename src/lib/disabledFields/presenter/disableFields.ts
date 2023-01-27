'use strict';

import * as List from "../index";
import { UserPremission } from "../../api/index";

export async function DisableField(record: eventRecord){
    // ログインユーザーのkintone利用権限
    const userPromission = await UserPremission();

    let disableList: fieldType[] = List.FieldToDisableGeneralUser(record);

    // ログインユーザーが団体管理者の場合リストの中身を変更
    if(userPromission.includes("団体管理")) disableList = List.FildToDisableManager(record);

    // ログインユーザーが開発者の場合リストの中身を変更
    if(userPromission.includes("開発")) disableList = List.FildToDisableDeveropper(record);

    for(let i = 0; i < disableList.length; i++){
        disableList[i].disabled = true;
    }

    return;
}