//Dependencies
const express = require('express');
//Use Express
const app = express();
require('dotenv').config();

//Signify Port for local host
const PORT = process.env.PORT || 3001

//call use of routes
const apiroutes = require('./routes/apiRoutes');
const HTMLroutes = require('./routes/htmlRoutes');

//display public views
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//use routes
app.use(apiroutes)
app.use(HTMLroutes)

//=======================================================
//Listener
app.listen(PORT, () => {
    console.log(`App listening on ` + PORT);
})