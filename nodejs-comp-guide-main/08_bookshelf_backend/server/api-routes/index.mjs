import express from "express";
import bookRouter from "./bookRouter.mjs";

const apiRouter = express.Router();
apiRouter.use('/books', bookRouter);

export default apiRouter;
