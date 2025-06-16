const fs = require("fs");

setTimeout(() => console.log("Timer 1 Finished"), 0);
setImmediate(() => console.log("Immediate 1 Finished"));

fs.readFile("./notes.txt", "utf-8", () => {
  console.log("I?O finished");
});

console.log("Hello from top level code...");
