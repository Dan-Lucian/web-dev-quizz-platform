const { Router } = require('express');
const path = require('path');
const { SUBMIT_PASSWORD } = require('../utils/config');

const routerSubmit = Router();

routerSubmit.get('/', (req, res, next) => {
  const { password } = req.query;

  if (password !== SUBMIT_PASSWORD) {
    res.redirect('/');
    return;
  }

  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

module.exports = routerSubmit;
