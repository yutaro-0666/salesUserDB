'use strict';

import { activityTypeTable } from './index';

/**
 * 団体管理者に対する入力制限
 * @param record
 * @returns
 */
export const orgManage = (event: salesUserDbEvent) => {
  const record = event.record;
  let result: fieldTypes[] = [
    record.活動ユーザーID,
    record.ユーザーID,
    record.団体ID,
    record.担当組織,
    record.管理組織,
  ];

  // 活動種別テーブル内の入力制御を追加
  let activityTypeTableFields = ['活動曜日'];
  result = result.concat(activityTypeTable(record, activityTypeTableFields));

  if (!event.type.includes('edit')) return result;
  // 編集モードの時に入力制御
  result = result.concat([record.氏名]);
  return result;
};
