const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/notes.txt`, "utf-8", (error, data) => {
  console.log(`Breed : ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((error, res) => {
      console.log(
        "================================================================"
      );
      if (error) return console.log(error.message);
      console.log(res.body);
      fs.writeFile("./dog-img.txt", res.body.message, "utf-8", (error) => {
        console.log("Random Dog Image Added.");
      });
    });
});
