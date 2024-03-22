import * as http from 'http';


/**
 * リクエストメソッド
 *
 * GETメソッド: コンテンツの取得
 * 　　　タイミング：ブラウザのURL指定、リンクのクリック、<form>のデフォルト
 *      特徴：URLの一部にパラメータを渡す
 *
 * POSTメソッド: コンテンツの作成
 * 　　　 タイミング：<form>のPOSTメソッド
 *       特徴：リクエストの本文にパラメータを渡す
 */

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/html charset=UTF-8'});

    if (req.url === '/') {
        res.write(`<a href="/result?param1=1&param2=2">GET method</a>`);
        res.end(`
                <form action="/result" method="post">
                    <input type="text" name="title">  
                    <input type="text" name="description">  
                    <input type="submit">  
                </form>    
        `);
    } else {
        console.log(`req.url: ${req.url}`);
        console.log(`req.method: ${req.method}`);

        if (req.method === 'GET') {
            const queryString = req.url.split('?')[1];
            console.log(queryString);
            const params = new URLSearchParams(queryString);
            console.log(params);

        } else if (req.method === 'POST') {
            let data = '';
            req.on('data', function (chunk) {
                data += chunk;
            });
            req.on('end', function () {
                console.log(data);
                const params = new URLSearchParams(data);
                console.log(params);
            });
        }
    }
});

server.listen(10000);

// const server = http.createServer(function (req, res) {
//     res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'});
//
//     if (req.url === '/') {
//         res.write(`<a href="/result?param1=1&param2=2">GET method</a>`);
//         res.end(`
//                 <form action="/result" method="post">
//                     <input type="text" name="title">
//                     <input type="text" name="description">
//                     <input type="submit">
//                 </form>
//                 `);
//     } else {
//         console.log(`req.url: ${req.url}`);
//         console.log(`req.method: ${req.method}`);
//
//         //obtain parameters
//         if (req.method === 'GET') {
//             console.log(req.url.split('?')[1]);
//             const queryString = req.url.split('?')[1];
//
//             const params = new URLSearchParams(queryString);
//             console.log(params.has('param1'));
//
//         } else if (req.method === 'POST') {
//             let data = '';
//             req.on('data', function (chunk) {
//                 data += chunk;
//             });
//             req.on('end', function () {
//                 console.log(`data: ${data}`);
//                 const params = new URLSearchParams(data);
//                 console.log(params);
//             });
//         }
//
//         res.end('else');
//     }
// });
//
// server.listen(10000);