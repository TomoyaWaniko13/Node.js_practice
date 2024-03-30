import {validationResult} from "express-validator";
import BookModel from "../models/bookModel.mjs";


async function getAllBooks(req, res) {
    const foundBooks = await BookModel.find().sort({updatedAt: -1});
    res.json(foundBooks);
}

async function getOneBookById(req, res) {
    const _id = req.params.id;
    const foundBook = await BookModel.findOne({_id});

    //if failed to find a book by the _id
    if (foundBook === null) {
        return res.status(404).json({msg: 'Page Not Found.'});
    }

    res.json(foundBook);
}

async function addOneBook(req, res) {
    //Executes the validation rules that have been set up
    // for the request object (req) and retrieves the result.
    // The validationResult() function returns an object containing
    // the outcome of these validations.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // Retrieves the validation error information
        // in an array format. This array includes error messages for
        // each field that failed validation, along with other relevant
        // information.
        const errs = errors.array();
        //  Utilizes the response object (res) to set the status code
        //  to 400 (Bad Request) and sends back a JSON object containing
        //  the error information to the client. This step effectively
        //  communicates the details of the validation errors to the client-side.
        return res.status(400).json(errs);
    }

    const newBook = new BookModel(req.body);
    const savedBook = await newBook.save();
    res.json(savedBook);
}

async function updateOneBook(req, res) {
    //Executes the validation rules that have been set up
    // for the request object (req) and retrieves the result.
    // The validationResult() function returns an object containing
    // the outcome of these validations.
    const errors = validationResult(req);

    // Retrieves the validation error information
    // in an array format. This array includes error messages for
    // each field that failed validation, along with other relevant
    // information.
    if (!errors.isEmpty()) {
        const errs = errors.array();
        //  Utilizes the response object (res) to set the status code
        //  to 400 (Bad Request) and sends back a JSON object containing
        //  the error information to the client. This step effectively
        //  communicates the details of the validation errors to the client-side.
        return res.status(400).json(errs);
    }

    const {title, description, comment, rating} = req.body;
    const _id = req.params.id;
    const foundBook = await BookModel.findOne({_id});

    //if failed to find a book by the _id, the status code is 404.
    if (foundBook === null) {
        return res.status(404).json({msg: 'Page Not Found.'});
    }
    if (title !== undefined) {
        foundBook.title = title;
    }
    if (description !== undefined) {
        foundBook.description = description;
    }
    if (comment !== undefined) {
        foundBook.comment = comment;
    }
    if (rating !== undefined) {
        foundBook.rating = rating;
    }
    const savedBook = await foundBook.save();
    res.json(savedBook);
}

async function deleteOneBook(req, res) {
    const _id = req.params.id;

    //When the deletion is unsuccessful,
    //await BookModel.deleteOne({_id}) returns
    //{ acknowledged: true, deletedCount: 0 }
    const {deletedCount} = await BookModel.deleteOne({_id});

    //If the deletion is unsuccessful, status code is 404.
    if (deletedCount === 0) {
        return res.status(404).json({msg: 'Target Book Not Found. This message has been sent from bookController.mjs.'});
    }

    res.json({'msg': 'Resource deleted successfully.'});

}


export {getAllBooks, getOneBookById, addOneBook, updateOneBook, deleteOneBook};

//The term "controller" comes from the Model-View-Controller (MVC)
// architectural pattern, widely used in the development of web
// applications. MVC is a way to organize your code to separate
// the concerns of managing different types of tasks. The pattern
// divides the application into three interconnected components,
// making it easier to manage complexity and development:
//
// 1. **Model:** Represents the shape of the data and business
// logic. It maintains the data of the application. The model
// does not concern itself with information about the user
// interface or how that data is presented to the user.
//
// 2. **View:** Represents the UI of the application, composed
// of all the things the user can see and interact with. Its
// responsibility is to display the data provided by the model
// in a specific format.
//
// 3. **Controller:** Acts as an intermediary between the model
// and the view. It listens to the user input (through the view),
// processes the user's data with the help of model objects, and
// returns the output display to the user (through the view). In
// a web application, a controller can manage the logic for different
// HTTP requests (such as GET, POST, PUT, DELETE) and is responsible
// for responding to the user input and perform interactions on the
// data model objects.
//
// The controller you're asking about is specifically for handling
// operations related to "books" in an application. This might include
// creating a new book, updating existing book information, deleting a
// book, or fetching book details. It processes requests, performs
// necessary logic or interactions with the data (model), and decides
// what response to send back (e.g., an HTML page, JSON data, etc.),
// often by rendering a view. Controllers play a crucial role in managing
// the flow of data in MVC-based applications, ensuring a clean separation
// between the application's technical architecture and the business logic.