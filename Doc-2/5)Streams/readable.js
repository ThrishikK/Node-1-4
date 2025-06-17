const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const readable = fs.createReadStream("./notes.txt");
  readable.on("data", (chunk) => {
    res.write(chunk);
  });

  readable.on("end", () => {
    res.end();
  });

  readable.on("error", (error) => {
    console.log(error);
    res.statusCode = 500;
    res.end("File Not Found");
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening .......");
});
