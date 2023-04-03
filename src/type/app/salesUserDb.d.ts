declare namespace salesUserDb {
  interface Fields {
    団体ID: kintone.fieldTypes.SingleLineText;
    活動ユーザーID: kintone.fieldTypes.SingleLineText;
    ユーザーID: kintone.fieldTypes.SingleLineText;
    氏名: kintone.fieldTypes.SingleLineText;
    訪問可能なお客様の性別: kintone.fieldTypes.CheckBox;
    管理組織: kintone.fieldTypes.OrganizationSelect;
    担当組織: kintone.fieldTypes.OrganizationSelect;
    活動種別: ActivityTypeTable;
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

declare interface salesUserDbEvent {
  record: salesUserDb.SavedFields;
  error: string;
  type: string;
}

declare interface ActivityTypeTable {
  type: 'SUBTABLE';
  value: Array<ActivityTypeTableRow>;
}

declare interface ActivityTypeTableRow {
  id?: string;
  value: {
    活動種別名: kintone.fieldTypes.SingleLineText;
    活動種別ID: kintone.fieldTypes.SingleLineText;
    登録番号_活動種別: kintone.fieldTypes.Number;
    活動曜日: kintone.fieldTypes.SingleLineText;
  };
}
