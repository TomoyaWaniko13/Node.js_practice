import express from 'express'
import { body } from 'express-validator'
import {getAllBooks, getBookById, addBook, updateBook, deleteBook,} from '../controllers/bookController.mjs'

const bookRouter = express.Router();

bookRouter.get('/', getAllBooks);

bookRouter.get('/:id', getBookById);

// bookRouter.post('/', body('title').notEmpty());
bookRouter.post(
    '/',
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('comment').notEmpty(),
    body('rating').notEmpty().isInt({min: 1, max: 5}),
    addBook
);

bookRouter.patch(
    '/:id',
    //Including notEmpty() after optional() means that if the field is
    // present, it cannot be an empty string or a value that is considered
    // empty (like an empty array for other cases).

    //If you use optional() without notEmpty(), it means the field is
    // not required for the request
    body('title').optional().notEmpty(),
    body('description').optional().notEmpty(),
    body('comment').optional().notEmpty(),
    body('rating').optional().notEmpty().isInt({min: 1, max: 5}),
    updateBook
);

bookRouter.delete('/:id', deleteBook);

export default bookRouter
