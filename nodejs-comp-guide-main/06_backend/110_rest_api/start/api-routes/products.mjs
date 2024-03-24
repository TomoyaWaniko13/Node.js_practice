import express from 'express';

const productRouter = express.Router();

const products = [
    { name: 'table', price: 1000 },
    { name: 'chair', price: 200 },
    { name: 'clock', price: 700 },
];

productRouter.get('/', function (req, res) {
    res.json(products);
});

productRouter.get('/:id', function (req, res) {
    const targetId = req.params.id;
    res.json(products[targetId]);
});

productRouter.post('/', function (req, res) {
    const newProduct = req.body;
    products.push(newProduct);
    console.log(products);
    res.json(newProduct);
});

productRouter.delete('/:id', function (req, res) {
    const deleteId = req.params.id;
    products.splice(deleteId, 1);
    console.log(products);
    res.json({ deleteId });
});

productRouter.patch('/:id', function (req, res) {
    const targetProduct = products[req.params.id];
    if (req.body.hasOwnProperty('name')) {
        targetProduct.name = req.body.name;
    }
    if (req.body.hasOwnProperty('price')) {
        targetProduct.price = req.body.price;
    }
    console.log(products);
    res.json(targetProduct);
});

export default productRouter;
