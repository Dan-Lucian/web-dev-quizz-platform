import { Router } from 'express';
import { Question } from '../models/question.js';
import { getRandomInts } from '../utils/getRandomInts.js';

const routerQuestions = Router();

// search the db for the questions based on the received topics obj
routerQuestions.post('/', (req, res) => {
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
        res.status(500).send(`Not enough questions: ${result.length}`);
        return;
      }

      // select questions based on the random numbers found earlier
      const randomQuestions = randomNumbers.map((number) => result[number]);
      res.json(randomQuestions);
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
