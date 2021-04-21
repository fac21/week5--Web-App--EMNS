// const db = require("../database/connection.js");
// const model = require("../database/model.js")

function post(request, response) {
  const idToDelete = request.body.id;
 model.deleteEntry(idToDelete)
    response.redirect("/");
  
}

module.exports = { post };