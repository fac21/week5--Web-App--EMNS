const db = require("../database/connection.js");
// const model = require("../database/model.js")

function get(request, response) {
  const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find the park</title>
</head>

<body>
    <section>
        <form method="POST" action="/posts">
            <p>
                <label for="username">Username</label>
                <input id="username" name="username">
            </p>
            <p>
                <label for="age">Age</label>
                <input id="age" name="age" type="number">
            </p>
            <p>
                <label for="location">Location</label>
                <input id="location" name="location">
            </p>
            <p>
                <button type="submit">Create user</button>
            </p>
        </form>
    </section>
</body>

</html>`;
  response.send(html);
}

function post(request, response) {
    const data = request.body;
    const values = Object.values(data);
    db.query(
      "INSERT INTO users(username, location) VALUES($1, $2, $3)",
      values
    ).then(() => {
      response.redirect("/posts");
    });
  }

module.exports = { get, post };
