import express from 'express';

const PORT = 8080;
const app = express();

// JSON.stringify({
//     message: 'hello',
//     number: 1,
//     array: ['banana', 'orange', 1]
// });

app.get('/', function (req, res) {
    res.send({
        message: 'hello',
        number: 1,
        array: ['banana', 'orange', 1]
    });
});

app.listen(PORT, function () {
    console.log(`Server is running at: http://localhost:${PORT}`)
});
