// const model = require("../database/model.js");
const templates = require("../assets/templates.js");
const db = require("../database/connection.js");

function getHomePage(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  const html = templates.homePageHtml();
  response.end(html);
}

module.exports = { getHomePage };
