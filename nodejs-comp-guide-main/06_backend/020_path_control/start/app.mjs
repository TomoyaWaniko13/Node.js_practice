import * as http from 'http';

const server = http.createServer((req, res) => {
    console.log(`req.url: ${req.url}`);

    if (req.url === '/hello') {
        res.end(`<script>console.log("frontend")</script>`);
    }else if (req.url === '/bye') {
        res.end('bye');
    } else {
        res.end('default');
    }
});

server.listen(8080);



