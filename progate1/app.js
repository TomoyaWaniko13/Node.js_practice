const express = require('express');
const app = express();

app.use(express.static("public"));
app.get('/', (req, res) => {
    res.render("hello.ejs")
});

app.get("/top", (req, res) => {
    res.render('top.ejs')
});

// Paste the code to start the server
app.listen(3000);
