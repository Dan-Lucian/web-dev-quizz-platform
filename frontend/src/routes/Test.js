import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import AnswersWrapper from '../components/AnswersWrapper';
import Button from '../components/Button';
import Question from '../components/Question';

const questionsDemo = [
  {
    question:
      'What selector is used for targeting a direct child of an alement ?',
    correctAnswer: '>',
    wrongAnswers: ['+', 'empty space', '~'],
    learn: 'https://javascript.info',
  },
  {
    question:
      'What selector is used for targeting a direct child of an alement ?',
    correctAnswer: '>',
    wrongAnswers: ['+', 'empty space', '~'],
    learn: 'https://javascript.info',
  },
  {
    question:
      'What selector is used for targeting a direct child of an alement ?',
    correctAnswer: '>',
    wrongAnswers: ['+', 'empty space', '~'],
    learn: 'https://javascript.info',
  },
];

const noQuestions = [
  {
    question: 'No question',
    answers: [
      {
        answer: 'Exit',
        correct: false,
      },
      {
        answer: 'Exit',
        correct: false,
      },
      {
        answer: 'Exit',
        correct: false,
      },
      {
        answer: 'Exit',
        correct: false,
      },
    ],
    learn: 'Exit',
  },
];

const Test = () => {
  let { state: questions } = useLocation();
  console.log('questions from useLocation: ', questions);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);

  if (!questions) {
    questions = noQuestions;
    console.log(questions);
  }

  const nextQuestion = () => {
    if (currentQuestionNumber + 1 === questions.length) {
      console.log('questions ended');
      return;
    }

    setCurrentQuestionNumber((prev) => prev + 1);
  };

  const showLearn = () => {
    console.log('SHOWING LEARNIGN RESOURCE________________');
  };

  return (
    <>
      <Header style={{ paddingTop: '150px' }}>
        <Question level={1}>
          {questions[currentQuestionNumber].question}
        </Question>
      </Header>

      <AnswersWrapper>
        {questions[currentQuestionNumber].answers.map((answer, idx) => (
          <Button
            key={idx}
            type="1"
            text={answer.answer}
            onClick={answer.correct ? nextQuestion : showLearn}
          />
        ))}
      </AnswersWrapper>
    </>
  );
};

export default Test;
