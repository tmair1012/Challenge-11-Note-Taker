
//Dependencies
const express = require('express');

const app = express();
const PORT = 2000;







//=======================================================
//Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})