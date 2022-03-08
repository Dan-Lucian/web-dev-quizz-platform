const db = require('../../utils/db');
const getPositiveUniqueRandomInts = require('../../utils/getPositiveUniqueRandomInts');

module.exports = {
  getByTopics,
  getById,
  create,
  delete: _delete,
};

async function getByTopics(request) {
  const limit = parseInt(request.query.limit) || 10;
  const topics = request.query.topics
    ? JSON.parse(decodeURIComponent(request.query.topics))
    : null;

  if (!topics) {
    const questionsAll = await db.Question.find({});
    return questionsAll;
  }

  const foundQuestions = await db.Question.find({ topics: { $in: topics } });
  if (foundQuestions.length === 0) throw 'Questions not found';

  const numbersRandom = getPositiveUniqueRandomInts(
    limit,
    0,
    foundQuestions.length - 1
  );
  if (!numbersRandom) throw `Not enough questions: ${foundQuestions.length}`;

  // select questions based on the random numbers found earlier
  const questionsRandom = numbersRandom.map((nr) => foundQuestions[nr]);
  return questionsRandom;
}

async function getById(id) {
  const question = await getQuestion(id);
  return question;
}

async function create(question) {
  const questionCreated = new db.Question(question);
  await questionCreated.save();
}

async function _delete(id) {
  const question = await getQuestion(id);
  await question.remove();
}

// helper functions

async function getQuestion(id) {
  if (!db.isValidId(id)) throw 'Question not found';

  const question = await db.Question.findById(id);
  if (!question) throw 'Question not found';

  return question;
}
