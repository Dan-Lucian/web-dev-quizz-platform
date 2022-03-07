const mongoose = require('mongoose');
const Question = require('../features/questions/question.model');
const { MONGODB_URI } = require('./config');
const logger = require('./logger');

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

module.exports = {
  Question,
  isValidId,
};

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}
