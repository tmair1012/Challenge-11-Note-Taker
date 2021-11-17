var app =require("express").Router();

const path = require('path');

//==================================================================
//Render initial html page
app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
//Render Note page on click
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
//Render initial html page if url is mistyped
app.get('*' , (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
module.exports = app;