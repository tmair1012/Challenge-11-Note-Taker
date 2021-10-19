var app = require("express").Router();
var dbNotes = require("../db/db.json")
var fs = require('fs')

//Render db.json api to save to notes
app.get('/api/notes', (req, res) => {
    dbNotes = JSON.parse(fs.readFileSync('./db/db.json'))
    console.log('get route', dbNotes)
    res.json(dbNotes);
})

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

app.delete('/api/notes/:id', (req, res)=> {
    var updateNote = []
    for(let i = 0; i<dbNotes.length; i++){
        if(dbNotes[i].id != req.params.id){
            updateNote.push(dbNotes[i])
        }
    }
    dbNotes = updatedNote
    fs.writeFileSync('./db/db.json', JSON.stringify(dbNotes), function(err,data){
        if(err) throw err;
    })
    console.log('delet route', dbNotes);
    res.json(dbNotes);
})

module.exports = app;
