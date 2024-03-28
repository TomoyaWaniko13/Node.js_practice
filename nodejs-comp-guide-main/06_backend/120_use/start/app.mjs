import express from 'express';

/*
# useとexpress
## ルートハンドラとミドルウェア
- request -> (middleware) -> route handler
- use vs get (前方一致 vs 完全一致)

## next()の使い方
- nextの必要性
- next後の処理も実行される
− nextで例外処理を呼び出す 
  - res.sendの多重呼び出しを防ぐ
*/

const PORT = 8080;
const app = express();

app.use(express.json());

// ミドルウェア：ルートハンドラの前後に行われる処理
// route handler: pathとmethodに紐づくメインの処理 responseを返す。

app.use('/', function (req, res, next) {
    console.log('first app.use() 1');

    res.send({message: 'hello'});
    if (true) {
        // next();
        next('Error occurred.');
        return;
    }
    //This line doesn't get called because of the above return keyword.
    console.log('first app.use() 2');
});

app.use('/', function (req, res, next) {
    console.log('second app.use()');
    next();
});

app.get('/', function (req, res, next) {
    console.log('first app.get()');
    res.send({message: 'hello'});
    next();
});

app.get('/', function (req, res, next) {
    console.log('second app.get()');
    // res.send({message: 'hello'});
});

app.use(function (err, req, res, next) {
    if (res.headersSent) {
        next(err);
        return;
    }

    res.json({err});
});

app.listen(PORT, function () {
    console.log(`Server start: http://localhost:${PORT}`);
});

