import { Router } from 'express';
import { Question } from '../models/question.js';
import { getRandomInts } from '../utils/getRandomInts.js';

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
      const randomNumbers = getRandomInts(limit, 0, result.length - 1);
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

// add the received obj in the db as a question
routerQuestions.post('/', (req, res) => {
  const { body } = req;

  const question = new Question(body);

  question
    .save()
    .then(() => res.json({ status: 'created successfuly' }))
    .catch((err) => res.json({ status: 'create error', error: err }));
});

export default routerQuestions;
