const fs = require("fs");
const superagent = require("superagent");

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (error, data) => {
      if (error) reject("File Not Found");
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, "utf-8", (error) => {
      reject("Something went wrong");
    });
    resolve("Dog File Written !!!");
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePromise("./notes.txt");
    console.log(data);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const finalResponse = await writeFilePromise(
      "./dog-img.txt",
      res.body.message
    );
    console.log(finalResponse);
  } catch (error) {
    console.log(error);
  }
};

getDogPic();
