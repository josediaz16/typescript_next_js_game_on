`use strict`;

const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const {
  afterEach,
  beforeEach,
  describe,
  it
} = exports.lab = Lab.script();

const { init } = require('../index');

describe('GET /', () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });

  it('responds with 200', async () => {
    const res = await server.inject({
      method: 'get',
      url: '/hello_world'
    });
    expect(res.statusCode).to.equal(200);
    expect(res.payload).to.equal('Hello world my friend');
  });
});
