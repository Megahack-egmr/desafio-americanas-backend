const AppError = require('../errors/app-error');
const RequestIdentifier = 'x-request-identifier';
let token;

module.exports = async (req, _, next) => {
  try {
    const newToken = req.headers[RequestIdentifier];
    token = newToken.accessToken;
  } catch (err) {
    process.on('unhandledRejection', (error) => {
      throw new AppError(error);
    });
    return;
  }

  req.headers.accessToken = token;

  next();
};
