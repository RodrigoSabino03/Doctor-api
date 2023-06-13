const dotenv = require('dotenv');
dotenv.config();

const user = process.env.DATABASE_USER
const database = process.env.DATABASE_NAME
const password = process.env.DATABASE_PASSWORD
const host = process.env.DATABASE_HOST
const port = process.env.DATABASE_PORT

const knex = require('knex')({
    client: 'mysql2',
    version: '5.7',
    connection: {
      host : host,
      port : port,
      user: user,
      database : database,
      password : password,
    },
    database : database
  });

  module.exports = knex;