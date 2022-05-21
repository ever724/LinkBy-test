const assert = require('assert');
const app = require('../../src/app');

describe('\'campagins\' service', () => {
  it('registered the service', () => {
    const service = app.service('campagins');

    assert.ok(service, 'Registered the service');
  });
});
