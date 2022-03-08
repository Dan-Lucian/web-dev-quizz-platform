const { Router } = require('express');
const path = require('path');
const { SUBMIT_PASSWORD } = require('../../utils/config');

const router = Router();

router.get('/', showSubmitPage);

function showSubmitPage(request, response, next) {
  const { password } = request.query;
  if (password !== SUBMIT_PASSWORD) return response.redirect('/');

  response.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
}

module.exports = router;
