const express = require('express')
const dotEnv = require("dotenv");
const app = express();
const cookieparser = require("cookie-parser");
var cors = require('cors')
app.use(cors())

/* -------------------------------------------------------------------------- */
/*                           Enviournment variables                           */
/* -------------------------------------------------------------------------- */
dotEnv.config({ path: './config.env' })


/* -------------------------------------------------------------------------- */
/*                              Database connect                              */
/* -------------------------------------------------------------------------- */
require('./DB/conn');


/* -------------------------------------------------------------------------- */
/*                              App configuration                             */
/* -------------------------------------------------------------------------- */
app.use(express.json())
app.use(cookieparser());

/* -------------------------------------------------------------------------- */
/*                                     API                                    */
/* -------------------------------------------------------------------------- */
app.use(require('./api/auth'));
app.use(require('./api/common'));

const PORT = process.env.PORT || 5000;


if (process.env.NODE_ENV == "production") {
    app.use(express.static("frontend/build"));
}

app.listen(PORT, () => {
    console.log(`Server is runnning ${PORT}`);
});