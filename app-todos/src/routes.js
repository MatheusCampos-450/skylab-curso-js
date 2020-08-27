const express = require('express');

const server = express();

server.use(express.json());

// configurar pasta publica
server.use(express.static("public"))


const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})


server.get("/", (req,res) => {
  res.render("index.html")
})

server.listen(3000);