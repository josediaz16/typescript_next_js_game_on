'use strict';

const Hapi = require('@hapi/hapi');

const server  = Hapi.server({
  port: 3000,
  host: '0.0.0.0'
});

server.route({
  method: 'GET',
  path: '/hello_world',
  handler: (request, h) => {
    return 'Hello world my friend'
  }
});

exports.init = async () => {

  await server.initialize();
  return server;
};

exports.start = async () => {
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
  return server;
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
