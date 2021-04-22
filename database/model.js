// Extract the homepage’s query.
const db = require("./connection.js");

function getUsers() {
  return db.query("SELECT * FROM users");
}

module.exports = { getUsers };

// Ideally we should do this data-processing inside model.js
function getUsers() {
  return db.query("SELECT * FROM users").then((result) => result.rows);
}

module.exports = { getUsers };

const model = require("../database/model.js");

function get(request, response) {
  getUsers().then((users) => {
    // ...
  });
}
