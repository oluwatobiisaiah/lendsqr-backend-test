import type { Knex } from "knex";
import config from "../config/config";

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
        host: config.DATABASE_HOST,
        user: config.DATABASE_USERNAME,
        password: config.DATABASE_PASSWORD,
        database: "lendsqr-test",
    },
    migrations: {
        directory: __dirname + "/migrations",
        tableName: "knex_migrations"
    },
    seeds: {
        directory: __dirname + "/seeds",
    },
    pool:{
      min:2,
      max:10
    }

},
  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }

};

export default knexConfig;
