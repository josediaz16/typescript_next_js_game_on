import {
  getConnectionOptions,
  createConnection,
  getConnection
} from 'typeorm';

export const createTypeOrmConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection(connectionOptions);
};

export const getTypeOrmConn = async () => {
  const connection = await getConnection(process.env.NODE_ENV);
  return connection
};
