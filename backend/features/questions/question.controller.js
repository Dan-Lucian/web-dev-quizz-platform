const { Router } = require('express');
const db = require('../../utils/db');
const getPositiveUniqueRandomInts = require('../../utils/getPositiveUniqueRandomInts');
const { SUBMIT_PASSWORD } = require('../../utils/config');

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id', _delete);

module.exports = router;

function getAll(request, response) {
  const limit = parseInt(request.query.limit) || 10;
  const topics = request.query.topics
    ? JSON.parse(decodeURIComponent(request.query.topics))
    : null;

  if (!topics) {
    db.Question.find({}).then((result) => {
      response.json(result);
    });

    return;
  }

  db.Question.find({ topics: { $in: topics } })
    .then((result) => {
      if (result.length === 0) {
        response.status(404).send('No question found');
        return;
      }

      // get array of 10 random numbers to select the questions later
      const randomNumbers = getPositiveUniqueRandomInts(
        limit,
        0,
        result.length - 1
      );
      if (!randomNumbers) {
        response.status(404).send(`Not enough questions: ${result.length}`);
        return;
      }

      // select questions based on the random numbers found earlier
      const randomQuestions = randomNumbers.map((number) => result[number]);
      response.status(200).json(randomQuestions);
    })
    .catch(() => response.json({ error: { message: 'Received empty array' } }));
}

function getById(request, response, next) {
  db.Question.findById(request.params.id)
    .then((question) => {
      if (question) {
        response.json(question.toJSON());
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
}

// add the received obj in the db as a question
function create(request, response, next) {
  const { password } = request.query;

  if (password !== SUBMIT_PASSWORD) {
    response.status(401).end();
    return;
  }

  const { body } = request;
  const question = new db.Question(body);

  question
    .save()
    .then(() => response.status(201).json({ status: 'created successfuly' }))
    .catch((err) => next(err));
}

function _delete(request, response, next) {
  const { password } = request.query;

  if (password !== SUBMIT_PASSWORD) {
    response.status(401).end();
    return;
  }

  db.Question.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
}
