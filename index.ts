import * as Hapi from "@hapi/hapi";

const server  = Hapi.server({
  port: 3000,
  host: '0.0.0.0'
});

server.route({
  method: 'GET',
  path: '/hello_world',
  handler: (request: Hapi.Request, h: Hapi.ResponseToolKit) => {
    return 'Hello world my friend buu'
  }
});

async function init() {
  await server.initialize();
  return server;
};

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export {
  init,
  start
}
