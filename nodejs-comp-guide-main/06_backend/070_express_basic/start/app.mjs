import express from "express";

const PORT = 11000;
const app = express();

app.get('/', function (req, res) {
    res.send(`
    <a href="/result?param1=1&param2=2">Get method link</a>
    <form action="/result" method="POST">
        <input type="text" name="title">   
        <input type="text" name="description">
        <input type="submit">
    </form>
    `);
});

app.get('/result', function (req, res) {
    //obtain parameters of a GET method.
    const params = req.query;
    console.log(params);
});

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});

