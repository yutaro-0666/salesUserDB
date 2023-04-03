'use strict';

/**
 * 入力制御するテーブル内のフィールドを指定
 * @param record
 * @param fields 入力制御するテーブル内のフィールド名
 * @returns
 */
export const activityTypeTable = (
  record: salesUserDb.SavedFields,
  fields: string[]
) => {
  const table = record.活動種別.value;
  let result: fieldTypes[] = [];

  for (let i = 0; i < table.length; i++) {
    let row = table[i].value;
    type Row = typeof row;
    type Col = keyof Row;

    for (let j = 0; j < fields.length; j++) {
      let col = fields[j] as Col;
      let cell = row[col];
      result.push(cell);
    }
  }

  return result;
};
