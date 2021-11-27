import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import Header from '../components/Header';
import AnswersWrapper from '../components/AnswersWrapper';
import Button from '../components/Button';
import Question from '../components/Question';
import Fail from '../components/Fail';

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
  questions = questions || noQuestions;

  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const navigate = useNavigate();
  const results = useRef(JSON.parse(JSON.stringify(questions)));

  const [showFail, setShowFail] = useState(false);

  const failQuestion = () => {
    results.current[currentQuestionNumber].passed = false;
  };

  const passQuestion = () => {
    results.current[currentQuestionNumber].passed = true;
  };

  const nextQuestion = () => {
    if (currentQuestionNumber + 1 === questions.length) {
      console.log('questions ended');
      navigate('/results', { state: results.current });
      return;
    }

    setCurrentQuestionNumber((prev) => prev + 1);
  };

  const showFailWindow = () => {
    setShowFail(true);
  };

  const hideFailWindow = () => {
    setShowFail(false);
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
            type="6"
            text={answer.answer}
            onClick={
              answer.correct
                ? () => {
                    passQuestion();
                    nextQuestion();
                  }
                : () => {
                    failQuestion();
                    showFailWindow();
                  }
            }
          />
        ))}
      </AnswersWrapper>

      {showFail && (
        <Fail
          moreInfo={questions[currentQuestionNumber].moreInfo}
          nextQuestion={nextQuestion}
          hideFailWindow={hideFailWindow}
        />
      )}
    </>
  );
};

export default Test;
