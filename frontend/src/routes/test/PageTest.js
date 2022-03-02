import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

// shared components
import PageNotFound from '../PageNotFound';

// local components
import PopupFail from './components/PopupFail';
import WrapperPage from './components/WrapperPage';
import WrapperAnswers from './components/WrapperAnswers';
import Question from './components/Question';
import Button from './components/Button';

const PageTest = () => {
  const { state: questions } = useLocation();
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const navigate = useNavigate();
  const results = useRef(JSON.parse(JSON.stringify(questions)));
  const [showFail, setShowFail] = useState(false);

  const toggleRevealAnswers = () => {
    setIsRevealed((prev) => !prev);
  };

  const moveOntoNextQuestion = (delay) => {
    setTimeout(() => {
      if (currentQuestionNumber + 1 === questions.length) {
        navigate('/results', { state: results.current });
        return;
      }

      toggleRevealAnswers();
      setCurrentQuestionNumber((prev) => prev + 1);
      setShowFail(false);
    }, delay);
  };

  const getButtonHandler = (isCorrect) => {
    const failQuestion = () => {
      results.current[currentQuestionNumber].passed = false;
    };

    const passQuestion = () => {
      results.current[currentQuestionNumber].passed = true;
    };

    const showFailWindow = () => {
      setShowFail(true);
    };

    if (isCorrect)
      return () => {
        toggleRevealAnswers();
        passQuestion();
        moveOntoNextQuestion(1000);
      };

    return () => {
      toggleRevealAnswers();
      failQuestion();
      showFailWindow();
    };
  };

  if (!questions) return <PageNotFound />;

  return (
    <WrapperPage>
      <Question level={1}>
        <span>{currentQuestionNumber + 1}.</span>
        {questions[currentQuestionNumber].question}
      </Question>

      <WrapperAnswers>
        {questions[currentQuestionNumber].answers.map((answer, idx) => (
          <Button
            key={idx}
            text={answer.answer}
            onClick={getButtonHandler(answer.correct)}
            isCorrect={answer.correct}
            isRevealed={isRevealed}
          />
        ))}
      </WrapperAnswers>

      {showFail && (
        <PopupFail
          moreInfo={questions[currentQuestionNumber].moreInfo}
          moveOntoNextQuestion={moveOntoNextQuestion}
        />
      )}
    </WrapperPage>
  );
};

export default PageTest;
