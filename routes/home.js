// const model = require("../database/model.js");

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
<h1> park finder</h1>
<form action="/users/create">
<button type="submit"> Add a park</button>
</form>
<form action="/posts">
<button type="submit"> View all parks</button>
</form>

</body>
`;
  response.send(html);
}

module.exports = { get };
