const assert = require('assert');
const app = require('../../src/app');

describe('\'purchase_orders\' service', () => {
  it('registered the service', () => {
    const service = app.service('purchase/orders');

    assert.ok(service, 'Registered the service');
  });
});
