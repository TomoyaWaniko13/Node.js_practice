import express from "express";

const PORT = 8080;
const app = express();

app.use(express.json());

const products = [
    {name: 'table', price: 1000},
    {name: 'chair', price: 200},
    {name: 'clock', price: 700},
];

app.get('/products', function (req, res) {
    res.json(products);
});

app.get('/products/:id', function (req, res) {
    const targetId = req.params.id;
    const targetProduct = products[targetId];
    res.json(targetProduct);
});

app.post('/products', function (req, res) {
    const newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct);
});

app.delete('/products/:id', function (req, res) {
    const targetId = req.params.id;
    products.splice(targetId, 1);
    res.json({targetId});
});

app.patch('/products/:id', function (req, res) {
    const targetProduct = products[req.params.id];

    if (req.body.hasOwnProperty('name')) {
        targetProduct.name = req.body.name;
    }

    if (req.body.hasOwnProperty('price')) {
        targetProduct.price = req.body.price;
    }

    res.json(targetProduct);
});

app.listen(PORT, function () {
    console.log(`server is running at http://localhost:${PORT}`);
});