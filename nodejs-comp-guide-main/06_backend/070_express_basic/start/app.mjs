import express from "express";

const PORT = 8080;
const app = express();

//POSTの本文の値を req.body propertyとして習得できるようになる。
app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.send(` 
        <a href="/result?param1=Neko1&param2=Neko2">get method link</a> 
        <form action="/result" method="post">
            <input type="text" name="title[]">
            <input type="text" name="title[]">
            <input type="text" name="description">
            <input type="submit">
        </form>
    `);
});

app.get('/result', function (req, res) {
    //GETのパラメータを取得
    const params = req.query;
    console.log(params);
});

app.post('/result', function (req, res) {
    //req.body is { title: [ '1', '2' ], description: '3' };
    const params = req.body;
    console.log(params);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});