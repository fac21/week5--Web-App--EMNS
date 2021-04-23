const db = require("../database/connection.js");
const model = require("../database/model.js");

//Using our database
function getUserEntry(request, response) {
  model.getPosts().then((result) => {
    const posts = result;
    let postItems = "";
    for (let post of posts) {
      console.log(post);
      postItems += `
          <li>
            <p>${post.username}</p> 
            <p>${post.park_name}</p>
            <p>${post.comment}</p>
          </li>
        `;
    }
    response.send(`<ul>${postItems}</ul>`);
  });
}

module.exports = { getUserEntry };

// username;(user)
// parkname; (parks)
// comment; (parks)

//Check the data! It's only comes from users!
