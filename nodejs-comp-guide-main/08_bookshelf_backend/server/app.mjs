import express from "express";
import env from "dotenv";
import apiRouter from "./api-routes/index.mjs";
import '../server/helpers/db.mjs';

env.config();

const app = express();
const port = process.env.PORT || 8080;

// this middleware is necessary because the server receives
// request in a JSON format.
app.use(express.json());

//If a path to the resource of a given URL is /api. Otherwise...
app.use('/api', apiRouter);

//Otherwise, the URL is invalid.
app.use(function (req, res) {
    res.status(404).json({msg: 'Page Not Found.  This message has been sent from app.mjs.'});
});


//When the catch part in the requestErrorHandler(controller) method
// in the bookRouter.js gets run, the following app.use() method
//gets run as well.
app.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    console.log(err);
    res.status(500).json({msg: 'An error has occurred. This message has been sent from app.mjs.'});
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});

