'use strict';

import { FieldsToHideGeneralUser, HideAct} from "../../index";
import { UserPremission } from "../../../api/index";

export async function HideFields(){
    // ログインユーザーの権限リスト
    const userPremission = await UserPremission();

    // "ユーザーが開発の権限を持っている場合"
    if(userPremission.includes('開発')) return;

    // 一般ユーザーを対象に非表示にするフィールドリスト
    let hideList = FieldsToHideGeneralUser();
    HideAct(hideList);
    return;
}