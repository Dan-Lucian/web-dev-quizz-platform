import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { handlerError } from './utils/middleware.js';
import { MONGODB_URI } from './utils/config.js';
import routerQuestions from './controllers/questions.js';
import routerWild from './controllers/wild.js';
import logger from './utils/logger.js';

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

app.use('/api/questions', routerQuestions);
app.use('*', routerWild);

app.use(handlerError);

export default app;
