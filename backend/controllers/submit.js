import { Router } from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { SUBMIT_PASSWORD } from '../utils/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routerSubmit = Router();

routerSubmit.get('/', (req, res, next) => {
  const { password } = req.query;

  if (password !== SUBMIT_PASSWORD) {
    res.redirect('/');
    return;
  }

  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

export default routerSubmit;
