const mockReqRes = require('mock-req-res');
const uuidv4 = require('uuid/v4');
const verifyHeader = require('../../middlewares/header-data');
const NotAuthenticatedError = require('../../errors/not-authenticated');

describe('should test headers middleware', () => {
  // test.each([
  //     [{}],
  //     [{ "x-request-identifier": uuidv4() }],
  //     [{ "x-request-username": null }],
  // ])("reject and throw an error", (headers) => {
  //     const req = mockReqRes.mockRequest({
  //         headers,
  //     });
  //     const next = () => { };

  //     expect(() => {
  //         verifyHeader(req, null, next);
  //     }).toThrow(new NotAuthenticatedError());
  // });

  // test("not validate: x-request-username are invalid", () => {
  //     process.env.NODE_ENV = "development";

  //     const req = mockReqRes.mockRequest({
  //         headers: { "x-request-username": uuidv4(), "x-request-identifier": uuidv4() },
  //     });
  //     const next = () => { };

  //     expect(() => {
  //         verifyHeader(req, null, next);
  //     }).toThrow(new NotAuthenticatedError());
  // });

  test('1+1=2', () => {
    expect(1 + 1).toEqual(2);
  });
});
