const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/notes.txt`, "utf-8", (error, data) => {
  console.log(`Breed : ${data}`);

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
