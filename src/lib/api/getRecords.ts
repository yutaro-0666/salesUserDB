'use strict';

import {
  GetKintoneRecords,
  GetParams,
} from '../../../../MyFactoryUsedKintone/src/index';

/**
 * 販売情報DBからデータを取得
 * @param appId 取得先アプリのIDを指定
 * @param query クエリを指定
 * @param fields 取得するフィールドを指定
 * @param sort 並び替えのクエリを指定
 * @param limit 取得するレコードの最大数を指定、デフォルトは1000
 * @returns
 */
export async function getRecords(
  appId: number,
  query: string,
  fields: string[],
  sort?: string[],
  limit?: number
) {
  const params: GetParams = {
    appId: appId,
    filterQuery: query,
    fields: fields,
    sortQuery: sort,
    limit: limit ? limit : 1000,
  };

  const getKintoneRecords = new GetKintoneRecords(appId, params);
  return (await getKintoneRecords.Action()) as any[];
}
