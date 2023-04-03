'use strict';

/**
 * ユニークIDを生成する
 * uniqueStr:https://qiita.com/coa00/items/679b0b5c7c468698d53f
 */
export const create = () => {
  return {
    活動ユーザーID: `SU${uniqueStr()}`,
  };
};

// ユニークな文字列を生成
const uniqueStr: () => string = (myStrong?: number) => {
  let strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
};
