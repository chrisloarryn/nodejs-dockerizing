const express = require('express');
const morgan = require('morgan')
let app = express();

// morgan is to getting information about petitions to the server/
app.use(morgan('dev'));

app.use(require('./routes/index'));

module.exports = app;