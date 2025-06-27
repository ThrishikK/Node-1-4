const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello From the middle ware........");
  req.inMiddleWare = new Date();
  next();
});

const dataAddress = path.join(__dirname, "../dev-data/data/tours-simple.json");
const tours = JSON.parse(fs.readFileSync(dataAddress, "utf-8"));

const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    data: { tours },
  });
};

const getTourById = (req, res) => {
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
    inMid: req.inMiddleWare,
    now: new Date(),
  });
};

const createTour = (req, res) => {
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
};

const updateTour = (req, res) => {
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
};

const deleteTour = (req, res) => {
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
};

app.route("/api/v1/tours").get(getAllTours).post(createTour);
app
  .route("/api/v1/tours/:id")
  .get(getTourById)
  .patch(updateTour)
  .delete(deleteTour);

const port = 3000;

app.listen(port, () => {
  console.log(`App running on the port : ${port}`);
});
