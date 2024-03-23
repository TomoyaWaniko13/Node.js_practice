import express from "express";

const PORT = 8080;
const app = express();

app.get('/', function (req, res) {
    res.send({
        message: 'hello',
        number: 1,
        array: ['banaan', 'orange', 1]
    });
});

app.listen(PORT, function () {
    console.log(`server is running at http://localhost:${PORT}`);
});