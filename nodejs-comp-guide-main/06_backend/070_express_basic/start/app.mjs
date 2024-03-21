import express from 'express';

const PORT = 8000;
const app = express();

app.get('/', function (req, res) {
    res.send(`
        <a href="/result?param1=1&param2=2">GET method link</a>
        <form action="/result" method="POST">
            <input type="text" name="title">
            <input type="text" name="description">
            <input type="submit">
        </form>
    `)
});

app.get('/result', function (req, res) {
    const params = req.query;
    console.log(params);
});

app.listen(PORT, function () {
    console.log(`Server starts at port ${PORT}`);
});
