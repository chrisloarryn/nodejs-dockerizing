const express = require('express');
const morgan = require('morgan')
let app = express();

app.use(morgan('dev'));

app.use(require('./routes/index'));

module.exports = app;