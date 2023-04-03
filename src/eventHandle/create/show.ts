'use strict';

import * as func from '../../lib/index';

export const show = async (handle: eventHandle.create.show) => {
  kintone.events.on(handle, async (event: salesUserDbEvent) => {
    // 指定したフィールドを非表示にする
    await func.defaultField.hide.act(event);
    // 活動種別テーブルを初期化する
    func.defaultTable.activityTypeTable.init(event.record);
    // サービスメニューIDを新規に生成してフィールドに反映する
    func.uniqueId.input(event.record);
    // 指定したフィールドを入力規制する
    await func.defaultField.disabled.act(event);
    return event;
  });
};
