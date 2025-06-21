const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const dataAddress = path.join(__dirname, "../dev-data/data/tours-simple.json");
const tours = JSON.parse(fs.readFileSync(dataAddress, "utf-8"));

app.delete("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  if (id > tours.length) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
const port = 3000;

app.listen(port, () => {
  console.log(`App running on the port : ${port}`);
});
