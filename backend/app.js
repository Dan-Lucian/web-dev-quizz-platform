import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import logger from './utils/logger.js';
import { handlerError } from './utils/middleware.js';
import { MONGODB_URI } from './utils/config.js';
import routerSubmit from './controllers/submit.js';
import routerQuestions from './controllers/questions.js';
import routerWild from './controllers/wild.js';

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

export default app;
