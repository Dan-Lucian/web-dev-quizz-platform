import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { handlerError, endpointUknown } from './utils/middleware.js';
import { MONGODB_URI } from './utils/config.js';
import routerQuestions from './controllers/questions.js';

const app = express();

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error.message);
  });

app.use(express.static('build'));
app.use(express.json());
app.use(morgan('tiny'));

app.use('/', routerQuestions);

app.use(endpointUknown);
app.use(handlerError);

export default app;
