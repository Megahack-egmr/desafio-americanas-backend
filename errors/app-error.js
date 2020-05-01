const HttpStatus = require('http-status-codes');

class AppError extends Error {
  constructor(code, message, status) {
    super();

    this.code = code || this.constructor.name;
    this.message = message || 'Houve um erro na solicitação, tente novamente.';
    this.status = status || HttpStatus.INTERNAL_SERVER_ERROR;
  }
}

module.exports = AppError;
