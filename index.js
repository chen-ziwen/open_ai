const express = require("express");
const router = require("./router");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen('3520', () => {
    console.log('web server running at http://127.0.0.1:3520');
})
