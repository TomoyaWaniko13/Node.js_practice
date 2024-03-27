import express from "express";
import productsRouter from './api-routes/products.mjs';

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(productsRouter);

app.listen(PORT, function (req, res) {
    console.log(`server is running at http://localhost:${PORT}`);
});
