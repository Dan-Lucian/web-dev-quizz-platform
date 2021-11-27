/* eslint-disable linebreak-style */
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

// eslint-disable-next-line no-undef
const url = process.env.MONGODB_URI;

console.log(`Connecting to ${url}`);
mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err.message);
  });

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  wrongAnswers: [
    {
      type: String,
      required: true,
    },
    {
      type: String,
      required: true,
    },
    {
      type: String,
      required: true,
    },
  ],
  topics: {
    type: [String],
    required: true,
  },
});
questionSchema.plugin(uniqueValidator);

questionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Question = mongoose.model('Question', questionSchema);

export { Question };
