import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as http from 'node:http';
import * as fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 8001;

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Added status code and content type
    res.end('This is the overview.');

  } else if (pathName === '/product') {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Added status code and content type
    res.end('This is the product.');

  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(dataObj));

  } else {
  res.writeHead(404, { 'Content-type': 'text/html', 'my-header': 'I am sending....' });
  res.end(`<h1>Page not found</h1>`);
}
})
;

server.listen(port, '127.0.0.1', () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
