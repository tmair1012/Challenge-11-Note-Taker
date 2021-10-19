
//Dependencies
const express = require('express');

const app = express();
const PORT = 2000;

const apiroutes = require('./routes/apiRoutes');
const HTMLroutes = require('./routes/htmlRoutes');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use(apiroutes)
app.use(HTMLroutes)


//=======================================================
//Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})