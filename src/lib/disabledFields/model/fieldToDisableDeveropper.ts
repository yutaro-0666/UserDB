'use stirict';

/**
 * 開発者を対象に入力制御するフィールドリスト
 */
export function FildToDisableDeveropper(record: eventRecord){

    let disablList: fieldType[] = [record.ユーザーID];
    
    return disablList;
}