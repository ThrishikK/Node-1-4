const fs = require("fs");

fs.readFile("../readSynchro/WaterFront.tt", "utf-8", (error, data) => {
  if (error) return console.log(error);
  console.log(data);
});
