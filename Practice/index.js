const fs = require("fs");
const path = require("path");

const waterFrontText_1 = fs.readFileSync("./one.txt", "utf-8");
const waterFrontText_2 = fs.readFileSync("./two.txt", "utf-8");

const finalTxt = waterFrontText_1 + waterFrontText_2;

const address = path.join(__dirname, "/one.txt");
console.log(address);
const a = fs.readFileSync(address, "utf-8");
console.log(a);

fs.writeFileSync("./waterFront.txt", finalTxt);
console.log(__filename);
