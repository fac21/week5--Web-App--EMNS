// const db = require("../database/connection.js");
// const model = require("../database/model.js")

function get(request, response) {
  // let posts = model.getPosts()
  // console.log(posts)
  console.log(request.body);
  let postItems = "";
  for (let post of posts) {
    postItems += `
          <li>
           <p>${post.text_content}</p>
           <p>${post.username}</p>
          </li>
        `;
  }
  response.send(`<ul>${postItems}</ul>`);
}

module.exports = { get };
