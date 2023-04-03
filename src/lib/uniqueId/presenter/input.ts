'use strict';

import * as model from '../model/index';

/**
 * 団体IDを新規に生成してフィールドに反映する
 */
export function input(record: salesUserDb.SavedFields) {
  record.ユーザーID.value = model.create().活動ユーザーID;
  return;
}
