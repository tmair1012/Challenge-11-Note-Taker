
//Dependencies
const express = require('express');

const app = express();
const PORT = 2000;
const path = require('path');


//return notes.html
app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})
//Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})