import knex from "knex";
import knexConfig from "./knexfile"
export const bootDatabase = () => {
    const connection = knex(knexConfig.development);
    return connection;
}