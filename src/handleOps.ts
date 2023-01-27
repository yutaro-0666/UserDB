'use strict';

import { InputUserId } from "./lib/uniquId/index";
import { HideFields } from "./lib/hideFields/index";
import { DisableField } from "./lib/disabledFields/index";

export async function CreateShow(eventHandle: eventHandleCreateShow){
    kintone.events.on(eventHandle, async (event: kintoneEvent)=> {

        // サービスメニューIDを新規に生成してフィールドに反映する
        InputUserId(event.record);
        // 指定したフィールドに入力制御をする
        await DisableField(event.record);
        // 指定したフィールドを非表示にする
        await HideFields();
        return event;
    });
}

export async function EditShow(eventHandle: eventHandleEditShow){
    kintone.events.on(eventHandle, async (event: kintoneEvent)=> {

        // 指定したフィールドに入力制御をする
        await DisableField(event.record);
        // 指定したフィールドを非表示にする
        await HideFields();
        return event;
    });
}

export async function DetailShow(eventHandle: eventHandleDetailShow){
    kintone.events.on(eventHandle, async (event: kintoneEvent)=> {

        // 指定したフィールドに入力制御をする
        await DisableField(event.record);
        // 指定したフィールドを非表示にする
        await HideFields();
        return event;
    });
}