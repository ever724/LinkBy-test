// Initializes the `clicks` service on path `/clicks`
const { Clicks } = require('./clicks.class');
const createModel = require('../../models/clicks.model');
const hooks = require('./clicks.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/clicks', new Clicks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('clicks');

  service.hooks(hooks);
};
