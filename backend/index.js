// eslint-disable-next-line no-unused-vars
import dotenv from 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { Question } from './models/question.js';
import { getRandomInts } from './utils/getRandomInts.js';

const app = express();

app.use(express.static('build'));
app.use(express.json());
app.use(morgan('tiny'));

// search the db for the questions based on the received topics obj
app.post('/', (req, res) => {
  const { body } = req;

  Question.find({ topics: { $in: body } })
    .then((result) => {
      if (result.length === 0) {
        res.status(404).send('No question found');
        return;
      }

      // get array of 10 random numbers to select the questions later
      const randomNumbers = getRandomInts(10, 0, result.length - 1);
      if (!randomNumbers) {
        res.status(500).send('Amount too big');
        return;
      }

      // select questions based on the random numbers found earlier
      const randomQuestions = randomNumbers.map((number) => result[number]);
      res.json(randomQuestions);
    })
    .catch(() => res.json({ error: { message: 'Received empty array' } }));
});

// add the received obj in the db as a question
app.post('/submit', (req, res) => {
  const { body } = req;

  const question = new Question(body);

  question
    .save()
    .then(() => res.json({ status: 'created successfuly' }))
    .catch((err) => res.json({ status: 'create error', error: err }));
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

// handler of reqs with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  next(err);
};

app.use(errorHandler);

// eslint-disable-next-line no-undef
let { PORT } = process.env;
if (!PORT) {
  PORT = 3001;
}
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
