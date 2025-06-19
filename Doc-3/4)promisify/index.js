const fs = require("fs");
const superagent = require("superagent");

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) reject("File Not Found");
      resolve(data);
    });
  });
};

readFilePromise(`${__dirname}/notes.txt`).then((data) => {
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);
      fs.writeFile("./dog-img.txt", res.body.message, "utf-8", () => {
        console.log("Random Dog Image Added.");
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
});
