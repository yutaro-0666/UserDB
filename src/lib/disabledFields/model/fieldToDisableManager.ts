'use stirict';

/**
 * 団体管理者を対象に入力制御するフィールドリスト
 */
export function FildToDisableManager(record: eventRecord){

    let disableList: fieldType[] = [record.ユーザーID, record.担当組織, record.管理組織];
    
    return disableList;
}