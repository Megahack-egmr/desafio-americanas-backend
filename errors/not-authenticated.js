const AppError = require('./app-error');
const HttpStatus = require('http-status-codes');

class NotAuthenticatedError extends AppError {
  constructor(code, message) {
    code = code || 'not_authenticated_error';
    message = message || 'Erro na autenticação';
    super(code, message, HttpStatus.UNAUTHORIZED);
  }
}

module.exports = NotAuthenticatedError;
