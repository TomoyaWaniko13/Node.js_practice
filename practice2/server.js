import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use()

app.get("/", (req, res) => {
    res.send("getting root");
});

app.get("/profile", (req, res) => {
    res.send("getting profile");
});

app.post("/profile", (req, res) => {
    console.log(req.body);
    const user = {
        name: "Sally",
        hobby: "soccer"
    }
    res.send(user);

});

app.listen(3000);