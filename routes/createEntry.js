const db = require("../database/connection.js");
const templates = require("../assets/templates.js");

function createUserEntry(request, response) {
  const html = templates.submit();
  response.send(html);
}

function post(request, response) {
  const data = request.body;
  const values = Object.values(data);
  console.log(values);

  db.query(
    "INSERT INTO users(username, park_name, comment) VALUES($1, $2, $3)",
    values
  ).then(() => {
    response.redirect("/posts");
  });
}

module.exports = { createUserEntry, post };
