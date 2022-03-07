const mongoose = require('mongoose');
const supertest = require('supertest');
const db = require('../utils/db');
const app = require('../app');
const {
  questionsInitial,
  getQuestionsFromDb,
  getIdNonExistent,
  questionNew,
} = require('./helper');
const { SUBMIT_PASSWORD } = require('../utils/config');

const api = supertest(app);

describe('When db already has questions', () => {
  beforeEach(async () => {
    await db.Question.deleteMany({});
    await db.Question.insertMany(questionsInitial);
  });

  test('questions are returned as json', async () => {
    await api
      .get('/api/questions')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all questions are returned', async () => {
    const response = await api.get('/api/questions');

    expect(response.body).toHaveLength(questionsInitial.length);
  });

  test('a specific question is within the returned questions', async () => {
    const response = await api.get('/api/questions');

    const contents = response.body.map((r) => r.question);
    expect(contents).toContain('Question 1');
  });

  describe('Viewing a specific question', () => {
    test('succeeds if id is valid', async () => {
      const questionsAtStart = await getQuestionsFromDb();

      const questionToView = questionsAtStart[0];

      const resultQuestion = await api
        .get(`/api/questions/${questionToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);

      const processedNoteToView = JSON.parse(JSON.stringify(questionToView));

      expect(resultQuestion.body).toEqual(processedNoteToView);
    });

    test('fails with 404 if question does not exist', async () => {
      const idNonExistentValid = await getIdNonExistent();

      await api.get(`/api/questions/${idNonExistentValid}`).expect(404);
    });

    test('fails with 400 if id is invalid', async () => {
      const idInvalid = '123000321s';

      await api.get(`/api/questions/${idInvalid}`).expect(400);
    });
  });

  describe('Addition of a new question', () => {
    test('succeeds if data valid & password correct', async () => {
      await api
        .post(`/api/questions?password=${SUBMIT_PASSWORD}`)
        .send(questionNew)
        .expect(201)
        .expect('Content-Type', /application\/json/);

      const questionsAtEnd = await getQuestionsFromDb();
      expect(questionsAtEnd).toHaveLength(questionsInitial.length + 1);

      const contents = questionsAtEnd.map((q) => q.question);
      expect(contents).toContain('Question 3');
    });

    test('fails with 401 if password is wrong/missing', async () => {
      await api.post('/api/questions').send(questionNew).expect(401);
      await api
        .post('/api/questions?password=wrongPassword/')
        .send(questionNew)
        .expect(401);
    });

    test('fails with 400 if correct password but ivalid data', async () => {
      const questionInvalid = { question: 'Question 4' };
      await api
        .post(`/api/questions?password=${SUBMIT_PASSWORD}`)
        .send(questionInvalid)
        .expect(400);

      const questionsAtEnd = await getQuestionsFromDb();

      expect(questionsAtEnd).toHaveLength(questionsInitial.length);
    });
  });

  describe('deletion of a question', () => {
    test('succeeds with 204 if password correct & id is valid', async () => {
      const questionsAtStart = await getQuestionsFromDb();
      const questionToDelete = questionsAtStart[0];

      await api
        .delete(
          `/api/questions/${questionToDelete.id}?password=${SUBMIT_PASSWORD}`
        )
        .expect(204);

      const questionsAtEnd = await getQuestionsFromDb();

      expect(questionsAtEnd).toHaveLength(questionsInitial.length - 1);

      const contents = questionsAtEnd.map((q) => q.question);

      expect(contents).not.toContain(questionToDelete.question);
    });

    test('fails with 401 if password is wrong/missing', async () => {
      const questionsAtStart = await getQuestionsFromDb();
      const questionToDelete = questionsAtStart[0];

      await api
        .delete(`/api/questions/${questionToDelete.id}?password=wrongPassword`)
        .expect(401);

      await api.delete(`/api/questions/${questionToDelete.id}`).expect(401);
    });

    test('fails with 404 if password correct but id not found', async () => {
      const idNonExistentValid = await getIdNonExistent();

      await api
        .get(`/api/questions/${idNonExistentValid}?password=${SUBMIT_PASSWORD}`)
        .expect(404);
    });

    test('fails with 400 if password correct but id ivalid', async () => {
      const idInvalid = '123123123';

      await api
        .get(`/api/questions/${idInvalid}?password=${SUBMIT_PASSWORD}`)
        .expect(400);
    });
  });
});

afterAll(() => {
  mongoose.connection.close();
});
