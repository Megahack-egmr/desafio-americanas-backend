const envListFormatter = require('./env.list.formatter.js');
const allowedHosts = envListFormatter(process.env.ALLOWED_HOSTS);
const NotAuthenticatedError = require('../errors/not-authenticated');

module.exports = {
  origin: (origin, callback, whitelist = allowedHosts) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new NotAuthenticatedError());
    }
  },
};
