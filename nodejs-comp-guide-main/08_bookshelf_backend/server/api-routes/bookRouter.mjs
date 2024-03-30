import express from 'express'
import { body } from 'express-validator'
import {getAllBooks, getOneBookById, addOneBook, updateOneBook, deleteOneBook,} from '../controllers/bookController.mjs'
import {controllerErrorWrapper} from "../helpers/controller-helpers.mjs.mjs";

const bookRouter = express.Router();


// bookRouter.get('/', async function (req, res,next) {
//     try{
//         return await getAllBooks(req, res);
//     }catch (e) {
//         next(e);
//     }
// });

//the following code is equivalent to the above code.
bookRouter.get('/', controllerErrorWrapper(getAllBooks));

bookRouter.get('/:id', controllerErrorWrapper(getOneBookById));

// bookRouter.post('/', body('title').notEmpty());
bookRouter.post(
    '/',
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('comment').notEmpty(),
    body('rating').notEmpty().isInt({min: 1, max: 5}),
    controllerErrorWrapper(addOneBook)

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
    controllerErrorWrapper(updateOneBook)
);

bookRouter.delete('/:id', controllerErrorWrapper(deleteOneBook));

export default bookRouter
