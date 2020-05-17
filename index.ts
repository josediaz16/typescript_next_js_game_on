import "reflect-metadata";

import * as Hapi              from "@hapi/hapi";
import {createConnection}     from "typeorm";
import {User}                 from "src/entity/User";
import { createTypeOrmConn }  from "./util/createTypeOrmConn";

const server  = Hapi.server({
  port: 8000,
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
  await withConnection(() => server.initialize());
  return server;
};

function handleError(err) {
  console.log(err);
  process.exit(1);
}

async function start() {
  await withConnection(() => server.start());
}

async function withConnection(serverFn: () => void) {
  try {
    const connection = await createTypeOrmConn();
    await serverFn();
    server.dbConnection = connection;
    console.log("Server running in " + server.info.uri)
  } catch (err) {
    handleError(err)
  }
}

export {
  init,
  start
}
