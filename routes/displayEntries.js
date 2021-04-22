const db = require("../database/connection.js");
const model = require("../database/model.js")

function get(request, response) {
  model.getPosts().then((result) => {
  const posts = result;
  console.log("hello");
  console.log(posts)
  // console.log(request.body);
  let postItems = "";
  // console.log(posts[0]);
  for (let post of posts) {
    console.log(post)
    postItems += `
          <li>
            <p>${post.id}</p>
            <p>${post.username}</p>
          </li>
        `;
  }
  response.send(`<ul>${postItems}</ul>`);
});
}
module.exports = { get };
