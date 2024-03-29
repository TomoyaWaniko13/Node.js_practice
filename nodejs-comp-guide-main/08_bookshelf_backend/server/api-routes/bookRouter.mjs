import express from "express";
import BookModel from "../models/bookModel.mjs";

const bookRouter = express.Router();

bookRouter.get('/', async function (req, res) {
    const books = await BookModel.find().sort({updatedAt: -1});
    res.json(books);
});

bookRouter.get('/:id', async function (req, res) {
    const _id = req.params.id;
    const foundBook = await BookModel.findOne({_id});
    res.json(foundBook);
});

bookRouter.post('/', async function (req, res) {
    const body = req.body;
    const newBook = new BookModel(body);
    const savedBook = await newBook.save();
    res.json(savedBook);
});

bookRouter.patch('/:id', async function (req, res) {
    const {title, description, comment, rating} = req.body;

    const _id = req.params.id;
    const foundBook = await BookModel.findById({_id});

    if (title !== undefined) {
        foundBook.title = title;
    }
    if (description !== undefined) {
        foundBook.description = description;
    }
    if (comment !== undefined) {
        foundBook.rating = rating;
    }
    const savedBook = await foundBook.save();
    res.json(savedBook);
});

bookRouter.delete('/:id', async function (req, res) {
    const _id = req.params.id;
    const deletedBook = await BookModel.deleteOne({_id});
    res.json({'msg': 'Delete succeeded.'});
});

export default bookRouter;
