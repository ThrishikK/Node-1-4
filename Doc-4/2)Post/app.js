const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the server side.....",
  });
});

app.post("/", (req, res) => {
  res.send("Can Post to this adress !!!!!!!!!!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`App running on the port : ${port}`);
});
