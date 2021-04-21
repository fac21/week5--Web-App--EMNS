const pg = require("pg");
//Load environment variables
const dotenv = require("dotenv").config();
const DB_URL = process.env.DB_CONNECTION_URL;

if (!DB_URL) throw new Error("No database URL environment variable!");

const client = {
  connectionString: DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const poolCreator = pg.Pool;

//Class
const db = new poolCreator(client);
