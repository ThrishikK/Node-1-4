const { error } = require("console");
const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  fs.readFile("./notes.txt", "utf-8", (error, data) => {
    if (error) console.log(error);
    res.end(data);
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening .......");
});
