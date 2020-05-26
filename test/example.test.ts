import { init }   from '../index';

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
    expect(res.statusCode).toBe(200);
    expect(res.payload).toBe('Hello world my friend buu');
  });
});
