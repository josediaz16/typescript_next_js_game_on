const databases = {
  development: 'game_on_dev',
  test: 'game_on_test'
};

const env = process.env.NODE_ENV;
const dropSchema = env == "test";

module.exports = {
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "postgres",
  password: "",
  database: databases[env],
  synchronize: true,
  dropSchema: dropSchema,
  logging: false,
  entities: [
    "src/entity/**/*.ts"
   ],
   migrations: [
     "src/migration/**/*.ts"
   ],
   subscribers: [
     "src/subscriber/**/*.ts"
   ],
   cli: {
     entitiesDir: "src/entity",
     migrationsDir: "src/migration",
     subscribersDir: "src/subscriber"
   }
}
