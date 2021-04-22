// Extract the homepage’s query.
const db = require("./connection.js");

// Ideally we should do this data-processing inside model.js
function getPosts() {
  return db.query("SELECT * FROM users").then((result) =>  result.rows);
}

const model = require("../database/model.js");

// function get(request, response) {
//   getPosts().then((users) => {
//     response.send()
//   });
// }

module.exports = { getPosts };
