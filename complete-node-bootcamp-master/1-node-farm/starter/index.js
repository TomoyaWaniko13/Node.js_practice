const fs = require("fs");
const http = require("http");

const portNumber = 8000;

const replaceTemplate = (tempCard, productJson) => {
    let replacedOutput = tempCard.replace(/{%PRODUCTNAME%}/g, productJson.productName);
    replacedOutput = replacedOutput.replace(/{%IMAGE%}/g, productJson.image);
    replacedOutput = replacedOutput.replace(/{%PRICE%}/g, productJson.price);
    replacedOutput = replacedOutput.replace(/{%FROM%}/g, productJson.from);
    replacedOutput = replacedOutput.replace(/{%NUTRIENTS%}/g, productJson.nutrients);
    replacedOutput = replacedOutput.replace(/{%QUANTITY%}/g, productJson.quantity);
    replacedOutput = replacedOutput.replace(/{%DESCRIPTION%}/g, productJson.description);
    replacedOutput = replacedOutput.replace(/{%ID%}/g, productJson.id);

    if (!productJson.organic) replacedOutput = replacedOutput.replace(/{%NOT_ORGANIC%}/g, "not-organic");

    return replacedOutput;
}

const tempOverviewHTML = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8");
const tempCardHTML = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8");
const productJsonHTML = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    //Overview page
    if (pathName === "/" || pathName === "/over") {
        res.writeHead(200, {"Content-type": "text/html"})

        const cardsHTML = dataObj.map(el => replaceTemplate(tempCardHTML, el)).join();
        const output = tempOverviewHTML.replace(`{%PRODUCT_CARDS%}`, cardsHTML);
        res.end(output);

        //Product page
    } else if (pathName === "/product") {
        res.end("This is the PRODUCT");

        //API
    } else if (pathName === "/api") {
        res.writeHead(200, {"Content-type": "application/json"});
        res.end(data);

        //NOT found
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "this is my header"
        });
        res.end("<h1>This is a h1 tag.</h1>");
    }

})

server.listen(portNumber, "127.0.0.1", () => {
    console.log(`Listening to request on port ${portNumber}`);
});


// synchronous code...
// const input = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(input);
// const output = `This is what we know about the avocado: ${input}`;
// fs.writeFileSync("./txt/output.txt", output);

//asynchronous code...
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     console.log("data1:", data1);
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//         console.log("data2:", data2)
//     })
// });


