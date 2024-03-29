import express from "express";
import BookModel from "../models/bookModel.mjs";

const bookRouter = express.Router();

bookRouter.get('/', async function (req, res) {
    //07_mongodb -> 080_model_bookshelf -> start -> Example.mjs の　async function findBook()を参照
    //modelはfind()を使える。
    // https://mongoosejs.com/docs/api/model.html#Model.find()

    const foundBooks = await BookModel.find().sort({updatedAt: -1});
    res.json(foundBooks);
});

bookRouter.get('/:id', async function (req, res) {
    //07_mongodb -> 080_model_bookshelf -> start -> Example.mjs の　async function findBook()を参照
    //modelはfind()を使える。
    // https://mongoosejs.com/docs/api/model.html#Model.findOne()

    const _id = req.params.id;
    const foundBook = await BookModel.findOne({_id});
    res.json(foundBook);
});

bookRouter.delete('/:id', async function (req, res) {
    // https://mongoosejs.com/docs/api/model.html#Model.deleteOne()
    const _id = req.params.id;
    const deletedBook = await BookModel.deleteOne({_id});
    res.json(deletedBook);
});

bookRouter.post('/', async function (req, res) {
    const body = req.body;

    //07_mongodb -> 080_model_bookshelf -> start -> Example.mjs の　async function findBook()を参照
    //BookModel()にobjectを入れられる。
    const newBook = new BookModel(req.body);

    const savedBook = await newBook.save();
    res.json(savedBook);
});

bookRouter.patch('/:id', async function (req, res) {
    // Destructuring assignment
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const {title, description, comment, rating} = req.body;

    const _id = req.params.id;
    const foundBook = await BookModel.findById({_id});

    if (title !== undefined) {
        foundBook.description = description;
    }
    if (description !== undefined) {
        foundBook.comment = comment;
    }
    if (comment !== undefined) {
        foundBook.rating = rating;
    }
    if (rating !== undefined) {
        foundBook.rating = rating;
    }

    const savedBook = await foundBook.save();
    res.json(savedBook);
});

export default bookRouter;
