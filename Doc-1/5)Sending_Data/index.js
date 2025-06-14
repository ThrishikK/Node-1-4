const fs = require("fs");
const http = require("http");
const { json } = require("stream/consumers");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/") {
    res.end("ABCD123");
  } else if (pathName === "/a") {
    res.end("AAAAAAAAAAAAAAA");
  } else if (pathName === "/data") {
    fs.readFile(`${__dirname}/actors.sql`, "utf-8", (error, data) => {
      if (error) return console.log(error);
      const actors_data = data;
      res.end(actors_data);
      console.log(actors_data);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Not a valid URL///</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000...");
});

console.log(__dirname);
