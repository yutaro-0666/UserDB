'use strict';

/**
 * 一般ユーザーを対象に非表示にするフィールドリスト
 */
export function FieldsToHideGeneralUser(){
    let hideList: string[] = ['ユーザーID', '団体ID', 'ログインID', '権限ステータス', 'レコード情報', '担当組織', '管理組織'];
    return hideList;
}