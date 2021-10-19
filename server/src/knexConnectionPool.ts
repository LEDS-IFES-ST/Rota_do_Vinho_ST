import knex, { Knex } from "knex";
import { knexdb } from "./knexfile";
export const db = knex(knexdb.development)
export const queryBuilder = knex(knexdb.development).queryBuilder()