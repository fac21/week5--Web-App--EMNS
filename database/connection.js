const pg = require("pg");
//Load environment variables
const dotenv = require("dotenv");
dotenv.config();
const DB_URL = process.env.DATABASE_URL;
console.log(DB_URL);
if (!DB_URL) throw new Error("No database URL environment variable!");

const options = {
  connectionString: DB_URL,
};

const db = new pg.Pool(options);
// db.connect();

module.exports = db;
