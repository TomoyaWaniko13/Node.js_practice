import fs from 'fs';
import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello from the server!!!');
});

server.listen(8000,'127.0.0.1', () =>{
    console.log('listening on')
});