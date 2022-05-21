// Initializes the `campagins` service on path `/campagins`
const { Campagins } = require('./campagins.class');
const createModel = require('../../models/campagins.model');
const hooks = require('./campagins.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/campagins', new Campagins(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('campagins');

  service.hooks(hooks);
};
