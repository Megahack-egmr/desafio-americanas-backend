const verifyHeader = require('../helpers/header-data');
const NotAuthenticatedError = require('../errors/not-authenticated');

module.exports = (req, _, next) => {
  if (!verifyHeader(req.headers, 'x-request-username')) {
    throw new NotAuthenticatedError();
  }

  if (!verifyHeader(req.headers, 'x-request-identifier')) {
    throw new NotAuthenticatedError();
  }

  next();
};
