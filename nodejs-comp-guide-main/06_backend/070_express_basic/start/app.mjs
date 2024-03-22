import express from "express";

const PORT = 10000;
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.send(`
            <a href="/result?param1=1&param2=2">GET method link</a>
            <form action="/result" method="post">
                <input type="text"  name="title[]"> 
                <input type="text" name="title[]">
                <input type="text" name="description">
                <input type="submit">
            </form>    
            `);

});

app.get('/result', function (req, res) {
    const params = req.query;
    console.log(params);
});

app.post('/result', function (req, res) {
    const params = req.body;
    console.log(params);
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
