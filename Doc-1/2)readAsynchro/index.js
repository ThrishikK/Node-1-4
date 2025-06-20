const fs = require("fs");

fs.readFile("./WaterFront.txt", "utf-8", (error, data) => {
  if (error) return console.log(error);
  console.log(data);
});
