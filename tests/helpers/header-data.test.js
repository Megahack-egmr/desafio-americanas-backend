const verifyHeader = require('../../helpers/header-data');
const uuidv4 = require('uuid/v4');

jest.setTimeout(3000);

describe('check if exists', () => {
  test('should validate', () => {
    const headers = {
      origin: 'localhost',
      'x-request-identifier': uuidv4(),
      'x-powered-by': uuidv4(),
    };

    expect(verifyHeader(headers, 'x-request-identifier')).toBe(true);
  });

  test('not validate', () => {
    const headers = {
      origin: 'localhost',
      'x-request-identifier': uuidv4(),
      'x-powered-by': uuidv4(),
    };

    expect(verifyHeader(headers, 'hackaton')).toBe(false);
  });

  test('validate with default value', () => {
    const headers = {
      origin: 'localhost',
      'x-request-identifier': uuidv4(),
      'x-powered-by': uuidv4(),
    };

    expect(verifyHeader(headers)).toBe(false);
  });
});
