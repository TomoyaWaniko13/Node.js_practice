import express from "express";
import bookModel from "../models/bookModel.mjs";

const bookRouter = express.Router();

bookRouter.get('/', async function (req, res) {
    const books = await bookModel.find();
    res.send(books);
});

export default bookRouter;
