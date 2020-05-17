'use strict';

const fs = require('fs');
const { exec } = require("child_process");

const fetchDBConfig = (nodeEnv) => {
  const rawData = fs.readFileSync('./ormconfig.json');
  const config = JSON.parse(rawData);
  return config.find(item => item.name === nodeEnv);
}

const executeShell = (shellCommand) => {
  exec(shellCommand, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
    }

    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }

    console.log(`stdout: ${stdout}`);
  });
}

const createDB = (nodeEnv) => {
  const envConfig = fetchDBConfig(nodeEnv);

  const {
    host,
    port,
    username,
    database
  } = envConfig;

  const sqlCommand = `CREATE DATABASE ${database};`;
  const shellCommand = `psql -U ${username} -h ${host} -p ${port} -c '${sqlCommand}'`;
  executeShell(shellCommand);
}

const dropDB = (nodeEnv) => {
  const envConfig = fetchDBConfig(nodeEnv);

  const {
    host,
    port,
    username,
    database
  } = envConfig;

  const sqlCommand = `DROP DATABASE IF EXISTS ${database};`;
  const shellCommand = `psql -U ${username} -h ${host} -p ${port} -c '${sqlCommand}'`;
  executeShell(shellCommand);
}

module.exports = {
  createDB,
  dropDB
}
