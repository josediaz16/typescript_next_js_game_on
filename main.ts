import { start } from './index'
import { createTypeOrmConn }  from "./util/createTypeOrmConn";

async function main(serverFn: () => void) {
  try {
    const connection = await createTypeOrmConn();
    const server = await start();
    console.log("Server running in " + server.info.uri)
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

main();
