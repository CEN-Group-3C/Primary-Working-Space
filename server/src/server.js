const express = require("express");
const path = require("path");
const router = require("./router.js");

const server = express();
server.use(express.json());
server.use(express.static(path.resolve(__dirname, "../client/dist")));

server.use(router);

server.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

module.exports = server;
