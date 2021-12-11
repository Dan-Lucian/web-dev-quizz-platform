import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

// shared components
import PageNotFound from '../PageNotFound';
import HCenter from '../../components/HCenter';

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

  const hideFailWindow = () => {
    setShowFail(false);
  };

  const handleButtonClick = (isCorrect) => {
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
        nextQuestion(1000);
      };

    return () => {
      toggleRevealAnswers();
      failQuestion();
      showFailWindow();
    };
  };

  if (!questions) return <PageNotFound />;

  return (
    <HCenter>
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
              onClick={handleButtonClick(answer.correct)}
              isCorrect={answer.correct}
              isRevealed={isRevealed}
            />
          ))}
        </WrapperAnswers>

        {showFail && (
          <PopupFail
            moreInfo={questions[currentQuestionNumber].moreInfo}
            nextQuestion={nextQuestion}
            hideFailWindow={hideFailWindow}
          />
        )}
      </WrapperPage>
    </HCenter>
  );
};

export default PageTest;
