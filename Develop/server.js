
//Dependencies
const express = require('express');

const app = express();
const PORT = 2000;


//return notes.html
app.get('/notes.html', (req, res) => {
    return
})
//Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})