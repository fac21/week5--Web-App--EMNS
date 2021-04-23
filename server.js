const express = require("express");
const server = express();

//Serve Routes
const home = require("./routes/home.js");
const createEntry = require("./routes/createEntry.js");
const deleteEntry = require("./routes/deleteEntry.js");
const displayEntries = require("./routes/displayEntries.js");
const pool = require("./database/connection.js"); //to allow us run queries on this port so we can actually update, delete, insert or see data

//Serve static files
server.use(express.static("public"));
const bodyParser = express.urlencoded({ extended: false });

// ROUTES
server.get("/", home.getHomePage);
server.get("/users/create", createEntry.createUserEntry);
server.get("/posts", displayEntries.getUserEntry);
server.post("/posts", bodyParser, displayEntries.getUserEntry);
// server.post("/users/delete/", deleteEntry.post);

//We are listening to the server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}...`)
);
