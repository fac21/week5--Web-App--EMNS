const express = require("express");
const server = express();
const home = require("./routes/home.js");
const createEntry = require("./routes/createEntry.js");
const deleteEntry = require("./routes/deleteEntry.js");
const displayEntries = require("./routes/displayEntries.js");

// //Connect database to the server
// const { Client } = require('pg');
// client.connect('db-url', () => console.log('Connected to DB!'));

// routes
server.get("/", home.get);
server.get("/users/create", createEntry.get);
server.post("/users/delete/", deleteEntry.post);
server.get("/posts", displayEntries.get);

//We are listening to the server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}...`));
