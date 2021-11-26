// eslint-disable-next-line no-unused-vars
import dotenv from 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { Question } from './models/question.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.static('build'));
app.use(express.json());
app.use(morgan('tiny'));

app.post('/', (req, res) => {
  const body = req.body;
  console.log('post received', body);
  res.json({'responseFromServer': 'post received'});
});

app.get('/questions', (req, res) => {
  Question.find({}).then(result => {
    res.json(result);
    mongoose.connection.close();
  });
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

// handler of reqs with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  // switch (err.name) {
  // case 'CastError':
  //   return res.status(400).send({ error: 'malformatted id' });

  // case 'ValidationError':
  //   return res.status(400).send({ error: err.message });
  // }

  next(err);
};

app.use(errorHandler);

// eslint-disable-next-line no-undef
let PORT = process.env.PORT;
if (!PORT) {
  PORT = 3001;
}
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
