const express = require("express");
const server = express();
const home = require("./routes/home.js");
const createEntry = require("./routes/createEntry.js");
const deleteEntry = require("./routes/deleteEntry.js");
const displayEntries = require("./routes/displayEntries.js");
const bodyParser = express.urlencoded({ extended: false });

// //Connect database to the server
// const { Client } = require('pg');
// client.connect('db-url', () => console.log('Connected to DB!'));

// Routes
server.get("/", home.get);
server.get("/users/create", createEntry.get);
server.get("/posts", displayEntries.get);
server.post("/posts", bodyParser, displayEntries.get);
server.post("/users/delete/", deleteEntry.post);

//We are listening to the server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}...`)
);
