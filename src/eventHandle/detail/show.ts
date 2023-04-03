'use strict';

import * as func from '../../lib/index';

export const show = async (handle: eventHandle.detail.show) => {
  kintone.events.on(handle, async (event: salesUserDbEvent) => {
    // 指定したフィールドを非表示にする
    await func.defaultField.hide.act(event);
    return event;
  });
};
