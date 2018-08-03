'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config.js');
const { dbConnect } = require('./db-mongoose');
// const { dbConnect } = require('./db-knex');

// Routers for cats and dogs
const catsRouter = require('./routes/cats.js');
const dogsRouter = require('./routes/dogs.js');

const app = express();

// Log all requests. Skip logging during
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common', {
  skip: (req, res) => process.env.NODE_ENV === 'test'
}));

// Cross origin
app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.use('/api/cats', catsRouter);
app.use('/api/dogs', dogsRouter);

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
