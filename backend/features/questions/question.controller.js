const { Router } = require('express');
const path = require('path');
const { SUBMIT_PASSWORD } = require('../../utils/config');
const questionService = require('./question.service');

const router = Router();

router.get('/', getByTopics);
router.get('/submit', showSubmitPage);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id', _delete);

module.exports = router;

async function getByTopics(request, response) {
  const questionsFound = await questionService.getByTopics(request);
  response.json(questionsFound);
}

function showSubmitPage(request, response, next) {
  const { password } = request.query;
  if (password !== SUBMIT_PASSWORD) {
    response.redirect('/');
    return;
  }

  response.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
}

async function getById(request, response, next) {
  const question = await questionService.getById(request.params.id);
  response.json(question);
}

// add the received obj in the db as a question
async function create(request, response, next) {
  const { password } = request.query;
  if (password !== SUBMIT_PASSWORD) return response.status(401).end();

  await questionService.create(request.body);
  response.status(201).json({ status: 'created successfuly' });
}

async function _delete(request, response, next) {
  const { password } = request.query;
  if (password !== SUBMIT_PASSWORD) return response.status(401).end();

  await questionService.delete(request.params.id);
  response.status(204).end();
}
