/* eslint-disable prefer-destructuring */
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const SUBMIT_PASSWORD = process.env.SUBMIT_PASSWORD;

const MONGODB_URI =
  process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

module.exports = { PORT, MONGODB_URI, SUBMIT_PASSWORD };
