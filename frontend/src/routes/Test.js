import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import TestPageWrapper from '../components/TestPageWrapper';
import AnswersWrapper from '../components/AnswersWrapper';
import TestPageHeader from '../components/TestPageHeader';
import Fail from '../components/Fail';
import ButtonAnswer from '../components/ButtonAnswer';
import HCenter from '../components/HCenter';

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
    <HCenter>
      <TestPageWrapper>
        <TestPageHeader level={1}>
          <span>{currentQuestionNumber + 1}.</span>
          {questions[currentQuestionNumber].question}
        </TestPageHeader>

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
      </TestPageWrapper>
    </HCenter>
  );
};

export default Test;
