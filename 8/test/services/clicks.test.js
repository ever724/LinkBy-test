const assert = require('assert');
const app = require('../../src/app');

describe('\'clicks\' service', () => {
  it('registered the service', () => {
    const service = app.service('clicks');

    assert.ok(service, 'Registered the service');
  });
});
