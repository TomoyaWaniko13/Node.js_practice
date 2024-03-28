import express from "express";
import BookModel from "../models/bookModel.mjs";

const bookRouter = express.Router();

bookRouter.get('/', async function (req, res) {
    const books = await BookModel.find().sort({updatedAt: -1});
    res.json(books);
});

bookRouter.get('/:id', async function (req, res) {
    const _id = req.params.id;
    const books = await BookModel.findOne({_id});
    res.json(books);
});

bookRouter.post('/', async function (req, res) {
    const body = req.body;
    const book = new BookModel(body);
    const newBook = await book.save();
    res.json(newBook);
});

bookRouter.patch('/', async function (req, res) {

});

bookRouter.delete('/:id', async function (req, res) {
    const _id = req.params.id;
    const books = await BookModel.deleteOne({_id});
    res.json({'msg': 'Delete succeeded.'});
});

export default bookRouter;
