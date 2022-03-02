import { Router } from 'express';
import { Question } from '../models/question.js';
import { getPositiveUniqueRandomInts } from '../utils/getPositiveUniqueRandomInts.js';
import { SUBMIT_PASSWORD } from '../utils/config.js';

const routerQuestions = Router();

routerQuestions.get('/', (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const topics = req.query.topics
    ? JSON.parse(decodeURIComponent(req.query.topics))
    : null;

  if (!topics) {
    Question.find({}).then((result) => {
      res.json(result);
    });

    return;
  }

  Question.find({ topics: { $in: topics } })
    .then((result) => {
      if (result.length === 0) {
        res.status(404).send('No question found');
        return;
      }

      // get array of 10 random numbers to select the questions later
      const randomNumbers = getPositiveUniqueRandomInts(
        limit,
        0,
        result.length - 1
      );
      if (!randomNumbers) {
        res.status(404).send(`Not enough questions: ${result.length}`);
        return;
      }

      // select questions based on the random numbers found earlier
      const randomQuestions = randomNumbers.map((number) => result[number]);
      res.status(200).json(randomQuestions);
    })
    .catch(() => res.json({ error: { message: 'Received empty array' } }));
});

routerQuestions.get('/:id', (req, res, next) => {
  Question.findById(req.params.id)
    .then((question) => {
      if (question) {
        res.json(question.toJSON());
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// add the received obj in the db as a question
routerQuestions.post('/', (req, res, next) => {
  const { password } = req.query;

  if (password !== SUBMIT_PASSWORD) {
    res.status(401).end();
    return;
  }

  const { body } = req;
  const question = new Question(body);

  question
    .save()
    .then(() => res.status(201).json({ status: 'created successfuly' }))
    .catch((err) => next(err));
});

routerQuestions.delete('/:id', (req, res, next) => {
  const { password } = req.query;

  if (password !== SUBMIT_PASSWORD) {
    res.status(401).end();
    return;
  }

  Question.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

export default routerQuestions;
