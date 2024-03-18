import * as http from 'http';

const server = http.createServer(function (req, res) {
    console.log(req.url);
});

server.listen(8080);
