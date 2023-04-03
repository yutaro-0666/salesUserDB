'use strict';

/**
 * 環境に応じてAppIdを指定する
 */
export const appId = () => {
  let salesUserDb = kintone.app.getId();
  if (!salesUserDb) salesUserDb = kintone.mobile.app.getId();

  //   担い手DB
  let userDb = null;

  if (salesUserDb === 0) {
    // 本番環境
    userDb = 0;
  } else {
    // demo環境
    userDb = 192;
  }

  return {
    salesUserDb,
    userDb,
  };
};
