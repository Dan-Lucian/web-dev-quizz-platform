/* eslint-disable prefer-destructuring */
import 'dotenv/config';

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
const SUBMIT_PASSWORD = process.env.SUBMIT_PASSWORD;

export { PORT, MONGODB_URI, SUBMIT_PASSWORD };
