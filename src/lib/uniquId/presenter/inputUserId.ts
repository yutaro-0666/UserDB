'use strict';

import { CreateNewId } from "../index";

/**
 * 団体IDを新規に生成してフィールドに反映する
 */
export function InputUserId(record: eventRecord){
    record.ユーザーID.value = CreateNewId().ユーザーID;
    return;
}