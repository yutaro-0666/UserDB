'use stirict';

/**
 * 一般ユーザーを対象に入力制御するフィールドリスト
 */
export function FieldToDisableGeneralUser(record: eventRecord){

    let disableList: fieldType[] = [record.苗字, record.名前, record.ユーザーID, record.ログインID, 
                                    record.権限ステータス, record.担当組織, record.管理組織];
    
    return disableList;
}