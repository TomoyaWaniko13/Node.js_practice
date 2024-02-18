const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "../dist/test.txt");
console.log(distPath);

fs.writeFileSync(distPath, "Hello, node.js");