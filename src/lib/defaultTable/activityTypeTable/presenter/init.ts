'use strict';

import * as model from '../model/index';
import { hideAddDelButton } from '../../hideAddDelButton';

export const init = (record: salesUserDb.SavedFields) => {
  record.活動種別 = model.init();
  hideAddDelButton(model.tableClass);
};
