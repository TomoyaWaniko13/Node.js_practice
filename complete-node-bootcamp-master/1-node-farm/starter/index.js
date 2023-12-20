const fs = require("fs");

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
