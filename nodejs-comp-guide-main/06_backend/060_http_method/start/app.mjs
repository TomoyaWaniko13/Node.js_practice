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
    res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'})
    // console.log(`requested URL: ${req.url}`);

    if (req.url === '/') {
        res.write(`<a href="/result?param1=1&param2=2">get method link</a>`);
        res.end(`
            <form action="/result" method="post">
                <input type="text" name="title">
                <input type="submit">
            </form>
            `);
    } else {
        console.log(req.url);
        console.log(req.method);
        if (req.method === "GET") {

        }
    }
});

server.listen(10000);