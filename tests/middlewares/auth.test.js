const mockRequisitionResponse = require('mock-req-res');
const uuidv4 = require('uuid/v4');
const verifyAuth = require('../../middlewares/auth');
const AppError = require('../../errors/app-error');

jest.setTimeout(3000);

describe('check authentication', () => {
  test('should validate headers and call getAuthToken', async () => {
    const req = mockRequisitionResponse.mockRequest({
      headers: {
        'x-request-identifier': uuidv4(),
        'x-request-username': 'hackaton',
      },
    });
    const next = jest.fn();

    await verifyAuth(req, null, next);

    expect(next).toHaveBeenCalled();
  });

  // test('should validate headers', async () => {
  //     const req = mockRequisitionResponse.mockRequest({
  //         headers: {
  //             'x-request-identifier': uuidv4(),
  //             'x-request-username': 'hackaton',
  //         },
  //     });
  //     const next = jest.fn();
  //     expect(next).toHaveBeenCalled();
  // });

  test('should throw error with null username', async () => {
    const req = mockRequisitionResponse.mockRequest({
      headers: {
        'x-request-identifier': uuidv4(),
        'x-request-username': null,
      },
    });
    const next = jest.fn();

    try {
      await verifyAuth(req, null, next);
    } catch (e) {
      expect(e).toStrictEqual(new AppError());
    }
  });
});
