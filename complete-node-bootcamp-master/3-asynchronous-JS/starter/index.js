const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
            if (err) reject("Error reading the file:", err);
            resolve(data);
        });
    })
}

const writeFilePro = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, "utf-8", err => {
            if (err) reject("error writing the file:", err);
            resolve(data);
        });
    });
}

const getDogPic = async () => {
    try {
        const breedData = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`Breed: ${breedData}`);

        const imgURL1 = await superagent(`https://dog.ceo/api/breed/${breedData}/images/random`);
        const imgURL2 = await superagent(`https://dog.ceo/api/breed/${breedData}/images/random`);
        const imgURL3 = await superagent(`https://dog.ceo/api/breed/${breedData}/images/random`);

        const all = await Promise.all([imgURL1, imgURL2, imgURL3]);
        const imgs = all.map(el => el.body.message);
        console.log(imgs);


        await writeFilePro(`${__dirname}/dog-img.txt`, dogImageUrl);
        console.log("Random dog image saved.")
    } catch (err) {
        console.log(err);
    }
    return "2: READY";
}

(async () => {
    try{
        console.log("1: Will get dog pics!");
        const x = await getDogPic();
        console.log(x);
        console.log("2: Done getting dogs pics!");
    }catch(err){
        console.log(err);
    }
})();

/*
console.log("1: Will get dog pics!");
getDogPic()
    .then(x => {
    console.log(x);
    console.log("3: Done getting dog pics!");
})
    .catch((err) => {
        console.log(err);
    });
*/

// readFilePro(`${__dirname}/dog.txt`)
//     .then(breedData => {
//         console.log(`Breed: ${breedData}`);
//
//         superagent
//             .get(`https://dog.ceo/api/breed/${breedData}/images/random`)
//             .then(res => {
//
//                 console.log("red.body.message:", res.body.message);
//                 return writeFilePro(`${__dirname}/url.txt`, res.body.message);
//             })
//             .then(() => {
//                 console.log("image is saved.")
//             })
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//
