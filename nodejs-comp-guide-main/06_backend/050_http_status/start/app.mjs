import * as http from "http";

const server = http.createServer(function (req, res) {
    console.log(req.url);
    // res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'});
    if (req.url === '/hello') {
        res.end(`<h1>こんにちは</h1>`)
        res.writeHead(302, {location: '/redirected'});

    } else if (req.url === '/bye') {
        res.end('bye');
    } else {
        res.end('<h1>Neko nya-</h1>');
    }
});

server.listen(8080);