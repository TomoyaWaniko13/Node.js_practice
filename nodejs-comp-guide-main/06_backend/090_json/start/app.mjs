import express from "express";

const PORT = 8080;
const app = express();

app.get('/', function (req, res) {

    // res.send({message: 'hello'});

    // res.send({
    //     message: 'hello',
    //     number: 1,
    //     array: ['one','two']
    // });

    // 必ずjson形式で渡したい時res.json()を使う
    res.json({
        species: 'ultimate neko',
        weight: 22.2,
        array: [2, 2, 222]
    });
});

app.listen(PORT, function () {
    console.log(`server is running at http://localhost:${PORT}`);
});