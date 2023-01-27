declare namespace userDB.types {
  interface Fields {
    団体ID: kintone.fieldTypes.SingleLineText;
    名前: kintone.fieldTypes.SingleLineText;
    ユーザーID: kintone.fieldTypes.SingleLineText;
    団体名: kintone.fieldTypes.SingleLineText;
    苗字: kintone.fieldTypes.SingleLineText;
    ログインID: kintone.fieldTypes.SingleLineText;
    権限ステータス: kintone.fieldTypes.CheckBox;
    担当組織: kintone.fieldTypes.OrganizationSelect;
    管理組織: kintone.fieldTypes.OrganizationSelect;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
