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

    const response_1 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const response_2 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const response_3 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const allResponses = await Promise.all([
      response_1,
      response_2,
      response_3,
    ]);

    const imgsList = allResponses.map((eachRes) => eachRes.body.message);
    // console.log(imgsList);
    return imgsList;
  } catch (error) {
    throw error;
  }
};

getDogPic()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
