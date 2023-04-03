'use strict';

import $ from 'jquery';

/**
 *テーブルの±ボタンを非表示にする
 *@param tableClass 指定するテーブルのクラス(subtable-row-"uniqueNum")
 */
export const hideAddDelButton = (tableClass: string) => {
  setTimeout(() => {
    $(`.${tableClass}`).find(`.subtable-operation-gaia`).hide();
  }, 100);
};
