import express from "express";
import env from "dotenv";
import apiRouter from "./api-routes/index.mjs";
import '../server/helpers/db.mjs';

env.config();

const app = express();
const port = process.env.PORT || 8080;

// this middleware is necessary because the server receives JSON
app.use(express.json());
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});

