//Dependencies
const express = require('express');
//Use Express
const app = express();
//Signify Port for local host
const PORT = process.env.PORT

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
    console.log(`App listening on PORT ${PORT}`);
})