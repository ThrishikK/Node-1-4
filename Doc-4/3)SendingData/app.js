const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const dataAddress = path.join(__dirname, "../dev-data/data/tours-simple.json");
const tours = JSON.parse(fs.readFileSync(dataAddress, "utf-8"));

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: { tours },
  });
});

app.post("/", (req, res) => {
  res.send("Can Post to this adress !!!!!!!!!!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`App running on the port : ${port}`);
});
