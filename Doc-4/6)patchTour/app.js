const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const dataAddress = path.join(__dirname, "../dev-data/data/tours-simple.json");
const tours = JSON.parse(fs.readFileSync(dataAddress, "utf-8"));

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

app.patch("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  if (id > tours.length) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  const tour = tours.find((each) => each.id === id);
  const index = tours.findIndex((each) => each.id === id);

  console.log(index);
  tours.splice(index, 1);

  const newProperties = req.body;
  for (let key of Object.keys(newProperties)) {
    tour[key] = newProperties[key];
  }
  console.log(tour);

  tours.push(tour);

  fs.writeFile(dataAddress, JSON.stringify(tours), (error) => {
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`App running on the port : ${port}`);
});
