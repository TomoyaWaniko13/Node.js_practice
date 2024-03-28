import apiRouter from "./api-routes/index.mjs";
import express from "express";

const PORT = 8080;
const app = express();

app.use(express.json());

app.use('/api', apiRouter);

app.listen(PORT, function (req, res) {
    console.log(`server is running at http://localhost:${PORT}`);
});
