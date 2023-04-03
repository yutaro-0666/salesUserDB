declare namespace userDb {
  interface Fields {
    団体ID: kintone.fieldTypes.SingleLineText;
    ナマエ: kintone.fieldTypes.SingleLineText;
    名前: kintone.fieldTypes.SingleLineText;
    ユーザーID: kintone.fieldTypes.SingleLineText;
    団体名: kintone.fieldTypes.SingleLineText;
    ミョウジ: kintone.fieldTypes.SingleLineText;
    連携用Gmailアドレス: kintone.fieldTypes.SingleLineText;
    氏名_検索用: kintone.fieldTypes.SingleLineText;
    苗字: kintone.fieldTypes.SingleLineText;
    ログインID: kintone.fieldTypes.SingleLineText;
    権限ステータス: kintone.fieldTypes.CheckBox;
    アレルギー考慮: kintone.fieldTypes.CheckBox;
    管理組織: kintone.fieldTypes.OrganizationSelect;
    担当組織: kintone.fieldTypes.OrganizationSelect;
    活動種別: {
      type: 'SUBTABLE';
      value: Array<{
        id: string;
        value: {
          活動種別名: kintone.fieldTypes.SingleLineText;
          活動種別ID: kintone.fieldTypes.SingleLineText;
          登録番号_活動種別: kintone.fieldTypes.Number;
          活動曜日: kintone.fieldTypes.SingleLineText;
        };
      }>;
    };
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
