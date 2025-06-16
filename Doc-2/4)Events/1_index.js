const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!!!!!");
});

myEmitter.on("newSale", (saleDetails) => {
  console.log(saleDetails);
  console.log("===========================");
});

const saleDetails1 = {
  name: "Thrishik",
  price: 2500,
};

const saleDetails2 = {
  name: "Kowshik",
  price: 7500,
};

myEmitter.emit("newSale", saleDetails1);
myEmitter.emit("newSale", saleDetails2);
