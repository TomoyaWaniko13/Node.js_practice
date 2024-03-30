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

app.use('/fjaojfaifjaiofjoajf', function (req, res, next) {
    console.log('first app.use() 1');
});

app.use(function (req, res) {
    console.log('second app.use()');
    res.status(404).json({msg: 'Page Not Found.'});
});

app.get('/', function (req, res, next) {
    console.log('first app.get()');
    res.send({message: 'hello'});
    next();
});


app.listen(PORT, function () {
    console.log(`Server start: http://localhost:${PORT}`);
});

