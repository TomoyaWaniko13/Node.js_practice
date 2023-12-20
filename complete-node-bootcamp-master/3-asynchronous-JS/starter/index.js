// const fs = require("fs");
// const superagent = require("superagent");
//
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     console.log(`Breed: ${data}`);
//
//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .end((err, res) => {
//            if(err) return console.log(err);
//         })
// })
//////////////////////////////////////

const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject(`Error reading file ${file}: ${err.message}`);
            resolve(data);
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject(`Error writing to file ${file}: ${err.message}`);
            resolve("File write successful");
        });
    });
};

readFilePro('dog.txt')
    .then(data => {
        console.log(`Breed: ${data.toString().trim()}`);
        return superagent.get(`https://dog.ceo/api/breed/${data.toString().trim()}/images/random`);
    })
    .then(res => {
        console.log("Dog image URL:", res.body.message);
        return writeFilePro('dog-img.txt', res.body.message);
    })
    .then(() => {
        console.log("Random dog image URL saved to file!");
    })
    .catch(err => {
        console.log("An error occurred:", err.message);
    });

///////////////////////

const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject(`Error reading file ${file}: ${err.message}`);
            resolve(data);
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject(`Error writing to file ${file}: ${err.message}`);
            resolve("File write successful");
        });
    });
};

readFilePro('dog.txt')
    .then(data => {
        console.log(`Breed: ${data.toString().trim()}`);
        return superagent.get(`https://dog.ceo/api/breed/${data.toString().trim()}/images/random`);
    })
    .then(res => {
        console.log("Dog image URL:", res.body.message);
        return writeFilePro('dog-img.txt', res.body.message);
    })
    .then(() => {
        console.log("Random dog image URL saved to file!");
    })
    .catch(err => {
        console.log("An error occurred:", err.message);
    });