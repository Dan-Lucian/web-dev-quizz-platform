const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const { handlerError } = require('./utils/middleware');
const { MONGODB_URI } = require('./utils/config');
const routerSubmit = require('./controllers/submit');
const routerQuestions = require('./controllers/questions');
const routerWild = require('./controllers/wild');

const app = express();

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB');
  })
  .catch((error) => {
    logger.info('Error connecting to MongoDB', error.message);
  });

app.use(express.static('build'));
app.use(express.json());
app.use(morgan('tiny'));

app.use('/submit', routerSubmit);
app.use('/api/questions', routerQuestions);
app.use('*', routerWild);

app.use(handlerError);

module.exports = app;
