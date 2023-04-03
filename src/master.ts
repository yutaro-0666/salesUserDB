'use strict';

import * as handle from './eventHandle/index';

(async () => {
  // pc
  await handle.create.show('app.record.create.show');

  await handle.edit.show('app.record.edit.show');

  await handle.detail.show('app.record.detail.show');
})();
