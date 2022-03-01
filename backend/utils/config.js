/* eslint-disable prefer-destructuring */
import 'dotenv/config';

const PORT = process.env.PORT || 3001;
const SUBMIT_PASSWORD = process.env.SUBMIT_PASSWORD;
const MONGODB_URI =
  process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

export { PORT, MONGODB_URI, SUBMIT_PASSWORD };
