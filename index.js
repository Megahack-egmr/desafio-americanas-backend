const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const corsOptions = require('./helpers/cors-options.js');
const freightRoute = require('./routes/freight');

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use('/freight/', freightRoute);

module.exports = app;
