const express = require('express');
const morgan = require('morgan');
const path = require('path');

// middleware
const handlerError = require('./middleware/handler-error');

// routes
const routerSubmit = require('./controllers/submit');
const routerQuestions = require('./features/questions/question.controller');

const app = express();

app.use(express.static('build'));
app.use(express.json());
app.use(morgan('tiny'));

app.use('/submit', routerSubmit);
app.use('/api/questions', routerQuestions);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(handlerError);

module.exports = app;
