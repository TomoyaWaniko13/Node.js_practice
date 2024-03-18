import * as http from 'http';

const server = http.createServer(function (req, res) {
    console.log(req.url);
    res.end('Hello from app.mjs');
});

server.listen(8080);
