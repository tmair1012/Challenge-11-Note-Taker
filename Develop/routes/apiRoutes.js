var app =require("express").Router();
var dbNotes = require("../db/db.json")
var fs = require('fs')

//Render db.json api to save to notes
app.get('/api/notes', (req, res) => {
    dbNotes = JSON.parse(fs.readFileSync('/db/db.json'))
    console.log('get route', dbNotes)
    res.json(dbNotes);
})
