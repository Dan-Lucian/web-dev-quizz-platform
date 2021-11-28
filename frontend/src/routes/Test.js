import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import Header from '../components/Header';
import AnswersWrapper from '../components/AnswersWrapper';
import Question from '../components/Question';
import Fail from '../components/Fail';
import ButtonAnswer from '../components/ButtonAnswer';

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
  const [isRevealed, setIsRevealed] = useState(false);
  const navigate = useNavigate();
  const results = useRef(JSON.parse(JSON.stringify(questions)));

  const [showFail, setShowFail] = useState(false);

  const toggleRevealAnswers = () => {
    setIsRevealed((prev) => !prev);
  };

  const failQuestion = () => {
    results.current[currentQuestionNumber].passed = false;
  };

  const passQuestion = () => {
    results.current[currentQuestionNumber].passed = true;
  };

  const nextQuestion = (delay) => {
    setTimeout(() => {
      toggleRevealAnswers();

      if (currentQuestionNumber + 1 === questions.length) {
        console.log('questions ended');
        navigate('/results', { state: results.current });
        return;
      }

      setCurrentQuestionNumber((prev) => prev + 1);
    }, delay);
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
          <ButtonAnswer
            key={idx}
            text={answer.answer}
            onClick={
              answer.correct
                ? () => {
                    toggleRevealAnswers();
                    passQuestion();
                    nextQuestion(1000);
                  }
                : () => {
                    toggleRevealAnswers();
                    failQuestion();
                    showFailWindow();
                  }
            }
            isCorrect={answer.correct}
            isRevealed={isRevealed}
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
