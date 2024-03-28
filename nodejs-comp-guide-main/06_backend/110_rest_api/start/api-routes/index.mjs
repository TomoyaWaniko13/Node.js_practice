import productRouter from "./products.mjs";
import express from "express";

const apiRouter = express.Router();
apiRouter.use('/products', productRouter);

export default apiRouter;
