import { start } from './index'
import { createConnection }  from "typeorm";

async function main(serverFn: () => void) {
  try {
    const connection = await createConnection();
    const server = await start();
    console.log("Server running in " + server.info.uri)
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

main();
