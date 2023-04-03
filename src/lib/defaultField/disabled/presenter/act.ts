'use strict';

import * as model from '..//model/index';
import * as func from '../../../index';

export const act = async (event: salesUserDbEvent) => {
  // ログインユーザーのkintone利用権限
  const userPermission = await func.api.userPermission();

  // ログインユーザーが開発者の場合
  if (userPermission.includes('開発')) return disabled(model.develop(event));

  // ログインユーザーが団体管理者の場合
  if (userPermission.includes('団体管理'))
    return disabled(model.orgManage(event));

  // ログインユーザーが一般ユーザーの場合
  return disabled(model.general(event));
};

/**
 * 各フィールドをdisabledにする
 * @param list
 */
const disabled = (list: fieldTypes[]) => {
  for (let i = 0; i < list.length; i++) {
    list[i].disabled = true;
  }
};
