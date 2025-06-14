const fs = require("fs");

const waterFrontText_1 = fs.readFileSync("./one.txt", "utf-8");
const waterFrontText_2 = fs.readFileSync("./two.txt", "utf-8");

const finalTxt = waterFrontText_1 + waterFrontText_2;

fs.writeFileSync("./waterFront.txt", finalTxt);
