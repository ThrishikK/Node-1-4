const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

setTimeout(() => console.log("Timer 1 Finished"), 0);
setImmediate(() => console.log("Immediate 1 Finished"));

fs.readFile("./notes.txt", "utf-8", () => {
  console.log("I/O finished");
  console.log("=============");

  setTimeout(() => console.log("Timer 2 Finished"), 0);
  setTimeout(() => console.log("Timer 3 Finished"), 3000);

  setImmediate(() => console.log("Immediate 2 Finished"));

  process.nextTick(() => console.log("Process.NextTick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted!!!");
  });
});

console.log("Hello from top level code...");
