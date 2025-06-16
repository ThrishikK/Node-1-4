const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/") {
    res.end("Hello from server");
  } else {
    res.end("Everything else");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listeneing to requests on port 8000...");
});
