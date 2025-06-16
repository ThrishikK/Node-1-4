const fs = require("fs");

setTimeout(() => console.log("Timer 1 Finished"), 0);
setImmediate(() => console.log("Immediate 1 Finished"));

fs.readFile("./notes.txt", "utf-8", () => {
  console.log("I/O finished");
  console.log("=============");

  setTimeout(() => console.log("Timer 2 Finished"), 0);
  setTimeout(() => console.log("Timer 3 Finished"), 3000);

  setImmediate(() => console.log("Immediate 2 Finished"));

  process.nextTick(() => console.log("Process.NextTick"));
});

console.log("Hello from top level code...");
