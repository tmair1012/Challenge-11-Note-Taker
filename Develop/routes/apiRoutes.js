var app = require("express").Router();
var dbNotes = require("../db/db.json")
var fs = require('fs')

//gets all notes
app.get('/api/notes', (req, res) => {
    dbNotes = JSON.parse(fs.readFileSync('./db/db.json'))
    console.log('get route', dbNotes)
    res.json(dbNotes);
})
//backend to add a new note
app.post('/api/notes', (req, res)=> {
    var newNote = {
        id: Math.floor(Math.random() * 100 + 1 ),
        title: req.body.title,
        text: req.body.text
    }
    dbNotes.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(dbNotes), function(err,data){
        if(err) throw err;
    })
    console.log('post route', dbNotes);
    res.json(dbNotes);
})
//backend to delete a note by id
app.delete('/api/notes/:id', (req, res)=> {
    var updateNote = []
    for(let i = 0; i<dbNotes.length; i++){
        if(dbNotes[i].id != req.params.id){
            updateNote.push(dbNotes[i])
        }
    }
    dbNotes = updateNote
    fs.writeFileSync('./db/db.json', JSON.stringify(dbNotes), function(err,data){
        if(err) throw err;
    })
    console.log('delete route', dbNotes);
    res.json(dbNotes);
})

module.exports = app;
