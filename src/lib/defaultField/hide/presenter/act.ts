'use strict';

import * as model from '../model/index';
import * as func from '../../../index';

export const act = async (event: salesUserDbEvent) => {
  const userPermission = await func.api.userPermission();

  // 開発者の場合
  if (userPermission.includes('開発')) return hide(event, model.develop);
  // 一般ユーザーの場合
  return hide(event, model.general);
};

/**
 * 指定したフィールドを非表示にする
 * @param event
 * @param list 非表示にするフィールド名
 * @returns
 */
const hide = (event: salesUserDbEvent, list: string[]) => {
  if (event.type.includes('mobile')) {
    for (let i = 0; i < list.length; i++) {
      kintone.mobile.app.record.setFieldShown(list[i], false);
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      kintone.app.record.setFieldShown(list[i], false);
    }
  }

  return;
};
