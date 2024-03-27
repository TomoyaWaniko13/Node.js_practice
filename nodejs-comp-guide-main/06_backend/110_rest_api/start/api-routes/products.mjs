import express from "express";
import {router} from "express/lib/application.js";

const router = express.Router();

const products = [
    {name: 'table', price: 1000},
    {name: 'chair', price: 200},
    {name: 'clock', price: 700},
];

router.get('/products', function (req, res) {
    res.json(products);
});


router.post('/products', function (req, res) {
    const newProduct = req.body;
    products.push(newProduct);
    console.log(products);
    res.json(newProduct);
});


router.delete('/products/:id', function (req, res) {
    const deleteId = req.params.id;
    products.splice(deleteId, 1);
    console.log(products);
    res.json({deleteId});
});

router.patch('/products/:id', function (req, res) {
    const targetProduct = products[req.params.id];
    if (req.body.hasOwnProperty('name')) {
        targetProduct.name = req.body.name;
    }
    if (req.body.hasOwnProperty('price')) {
        targetProduct.price = req.body.price;
    }
    res.json(targetProduct);
});

export default router;
