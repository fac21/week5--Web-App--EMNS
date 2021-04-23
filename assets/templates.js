// sharedLayout wraps an HTML string in all the extra stuff you need, like the <head>
function sharedLayout(content) {
  return `
    <!doctype html>
    <html>
      <head>
      <meta charset="utf-8">
      <title>Greeting app</title>
      <link rel="stylesheet" href="../public/css/style.css">
      <body>
        ${content}
      </body>
    </html>
  `;
}

// the HTML response for the home route (not dynamic so no arguments passed in)
function homePageHtml() {
  return sharedLayout(`
<h1>Park Finder</h1>
<section>
<button type="submit"><a href="/users/create">Add a park</a></button>
<button type="submit"><a href="/posts">View all parks</a></button>
</section>
`);
}

function submit() {
  return sharedLayout(
    ` <section>
        <form action="/posts" method="POST">
            <p>
                <label for="username">Username</label>
                <input id="username" name="username" required>
            </p>
            <p>
                <label for="park_name">Park Name</label>
                <input id="park_name" name="park_name" type="text" required>
            </p>
            <p>
                <label for="comment">Comment</label>
                <input id="comment" name="comment" required>
            </p>
            <p>
                <button type="submit">Add park</button>
            </p>
        </form>
    </section>`
  );
}

module.exports = { homePageHtml, submit };
