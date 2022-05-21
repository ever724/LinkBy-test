const accounts = require('./accounts/accounts.service.js');
const campagins = require('./campagins/campagins.service.js');
const clicks = require('./clicks/clicks.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(accounts);
  app.configure(campagins);
  app.configure(clicks);
}
