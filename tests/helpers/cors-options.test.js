const corsOptions = require('../../helpers/cors-options');
const listFormatter = require('../../helpers/env.list.formatter');
const NotAuthenticatedError = require('../../errors/not-authenticated');

jest.setTimeout(3000);

describe('set cors options', () => {
  let origin;
  let callbackFn;

  beforeEach(() => {
    origin = 'localhost';
    callbackFn = jest.fn();
  });

  test('return valid data', () => {
    process.env.ALLOWED_HOSTS = 'localhost, ';
    corsOptions.origin(origin, callbackFn, listFormatter(process.env.ALLOWED_HOSTS));

    expect(callbackFn).toHaveBeenCalledWith(null, true);
  });

  test('return invalid data', () => {
    process.env.ALLOWED_HOSTS = 'http://localhost:7200, ';

    corsOptions.origin(origin, callbackFn, listFormatter(process.env.ALLOWED_HOSTS));

    expect(callbackFn).toHaveBeenCalledWith(new NotAuthenticatedError());
  });
});
