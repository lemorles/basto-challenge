const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('./config');

const app = express();

const PORT = 3001;

// middlewares
app.use(morgan('dev'));

// db
mongoose.connect(config.mongoUri, (err) => (err ? console.log(`DB Error!: ${err}`) : console.log('MongoDB Connected!')));

app.listen(PORT, () => console.log('server running on port 3001'));
