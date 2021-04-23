//Connecting the server and database
const pg = require("pg");

//Load environment variables
const dotenv = require("dotenv").config();

const DB_URL = process.env.DATABASE_URL;

if (!DB_URL) throw new Error("No database URL environment variable!");

//Making a connection, telling which database to connect to
const options = {
  connectionString: DB_URL,
  ssl: { rejectUnauthorized: false }, //use that line to deploy data on heroku.
};

const db = new pg.Pool(options);

module.exports = db;
