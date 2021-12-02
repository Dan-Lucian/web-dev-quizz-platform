// eslint-disable-next-line no-unused-vars
import dotenv from 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { Question } from './models/question.js';

const app = express();

app.use(express.static('build'));
app.use(express.json());
app.use(morgan('tiny'));

app.post('/', (req, res) => {
  const { body } = req;

  Question.find({ topics: { $in: body } })
    .then((result) => {
      res.json(result);
    })
    .catch(() => res.status(500).end());
});

app.get('/questions', (req, res) => {
  Question.find({}).then((result) => {
    res.json(result);
  });
});

app.get('/create', (req, res) => {
  const question = new Question({
    question: 'some question 6',
    answers: [
      {
        answer: 'Correct',
        correct: true,
      },
      {
        answer: 'False',
        correct: false,
      },
      {
        answer: 'False',
        correct: false,
      },
      {
        answer: 'False',
        correct: false,
      },
    ],
    topics: ['html', 'forms'],
    moreInfo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  });

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
