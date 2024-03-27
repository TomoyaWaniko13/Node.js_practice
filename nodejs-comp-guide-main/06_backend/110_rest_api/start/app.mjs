import express from "express";

const PORT = 8080;
const app = express();
//REST API
//
// 以下の特徴を持つ、サーバーへのリクエスト方式のこと
//
// ・リソース毎にURLを定義
// ・メソッドでリソースに対する処理を定義
// メソッドの例
// POST、GET、DELETE、PUTなど
// ・JSONでデータをやり取りする

app.use(express.json());

const products = [
    {name: 'table', price: 1000},
    {name: 'chair', price: 200},
    {name: 'clock', price: 700},
];

app.get('/products', function (req, res) {
    res.json(products);
});

app.post('/create-product', function (req, res) {
    const newProduct = req.body;
    products.push(newProduct);
    console.log(products);
    res.json(newProduct);
});

app.post('/delete-product', function (req, res) {
    const deleteId = req.body.id;
    products.splice(deleteId, 1);
    console.log(products);
    res.json({deleteId});
});

app.post('/update-product', function (req, res) {

    const targetProduct = products[req.body.id];
    if (req.body.hasOwnProperty('name')) {
        targetProduct.name = req.body.name;
    }
    if (req.body.hasOwnProperty('price')) {
        targetProduct.price = req.body.price;
    }
    res.json(targetProduct);
});

app.listen(PORT, function (req, res) {
    console.log(`server is running at http://localhost:${PORT}`);
});

