'use strict';

import * as func from '../../lib/index';

export const show = async (handle: eventHandle.edit.show) => {
  kintone.events.on(handle, async (event: salesUserDbEvent) => {
    // 指定したフィールドを非表示にする
    await func.defaultField.hide.act(event);
    // 指定したフィールドを入力規制する
    await func.defaultField.disabled.act(event);
    return event;
  });
};
