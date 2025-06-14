const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listeneing to requests on port 8000...");
});
