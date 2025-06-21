const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const dataAddress = path.join(__dirname, "../dev-data/data/tours-simple.json");
const tours = JSON.parse(fs.readFileSync(dataAddress, "utf-8"));

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: { tours },
  });
});

app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  if (id > tours.length) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  const tour = tours.find((each) => each.id === id);
  res.status(200).json({
    status: "success",
    data: { tour },
  });
});

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(dataAddress, JSON.stringify(tours), (error) => {
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`App running on the port : ${port}`);
});
