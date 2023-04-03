'use strict';

import { activityTypeTable } from './index';

/**
 * 開発権限で入力制限するリスト
 * @returns
 */
export const develop = (event: salesUserDbEvent) => {
  const record = event.record;
  let result: fieldTypes[] = [
    record.活動ユーザーID,
    record.氏名,
    record.ユーザーID,
  ];
  // 活動種別テーブルの制限を追加
  const tableFields = ['活動曜日'];
  result = result.concat(activityTypeTable(record, tableFields));
  return result;
};
