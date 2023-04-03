'use strict';

export const init = () => {
  const day = [
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日',
    '日曜日',
  ];

  let rows: ActivityTypeTableRow[] = [];
  for (let i = 0; i < day.length; i++) {
    let row: ActivityTypeTableRow = {
      value: {
        活動曜日: { type: 'SINGLE_LINE_TEXT', value: day[i], disabled: true },
        登録番号_活動種別: { type: 'NUMBER', value: '' },
        活動種別ID: { type: 'SINGLE_LINE_TEXT', value: '' },
        活動種別名: { type: 'SINGLE_LINE_TEXT', value: '' },
      },
    };

    rows.push(row);
  }

  const result: ActivityTypeTable = {
    type: 'SUBTABLE',
    value: rows,
  };

  return result;
};
