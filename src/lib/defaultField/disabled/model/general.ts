'use strict';

import { activityTypeTable } from './index';

/**
 *一般ユーザーに対する入力制限
 * @param record
 * @returns
 */
export const general = (event: salesUserDbEvent) => {
  const record = event.record;
  let result: fieldTypes[] = [
    record.活動ユーザーID,
    record.氏名,
    record.ユーザーID,
    record.団体ID,
    record.担当組織,
    record.管理組織,
    record.訪問可能なお客様の性別,
  ];
  // 活動種別テーブル内の入力制御を追加
  let activityTypeTableFields = ['活動曜日', '登録番号_活動種別'];
  result = result.concat(activityTypeTable(record, activityTypeTableFields));
  return result;
};
