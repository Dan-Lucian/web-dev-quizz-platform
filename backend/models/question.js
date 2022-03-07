const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schemaQuestion = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: [
    {
      answer: {
        type: String,
        required: true,
      },
      correct: {
        type: Boolean,
        required: true,
      },
    },
  ],
  topics: {
    type: [String],
    required: true,
  },
  moreInfo: {
    type: String,
    required: true,
  },
});
schemaQuestion.plugin(uniqueValidator);

schemaQuestion.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Question = mongoose.model('Question', schemaQuestion);

module.exports = Question;
