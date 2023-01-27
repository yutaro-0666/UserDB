'use strict';

/**
 * 環境に応じてAppIdを指定する
 */
export function AppId(){

    let userDBAppId = kintone.app.getId();
    if(!userDBAppId) userDBAppId = kintone.mobile.app.getId()

    // // サービス分類2アプリ
    // let serviceContentAppId = null;

    // if(userDBAppId === 0){
    //     // prod
    //     serviceContentAppId = 189;

    // }else{
    //     // demo
    //     serviceContentAppId = 189;
    // } 

    return {
        userDBAppId,
    }
}