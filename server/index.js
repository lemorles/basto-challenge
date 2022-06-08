const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');

const app = express();
const routes = require('./routes');

const PORT = 3001;

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/api', routes);

// db
mongoose.connect(config.mongoUri, (err) => (err ? console.log(`DB Error!: ${err}`) : console.log('MongoDB Connected!')));

app.listen(PORT, () => console.log('server running on port 3001'));
