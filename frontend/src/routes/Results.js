import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Question from '../components/Question';
import QuestionResult from '../components/QuestionResult';
import QuestionResultsWrapper from '../components/QuestionResultsWrapper';

const Results = () => {
  const { state: results } = useLocation();
  console.log(results);

  const stats = { correct: 0, wrong: 0 };
  results.forEach((question) => {
    if (question.passed) {
      stats.correct += 1;
    } else {
      stats.wrong += 1;
    }
  });

  let mark;
  if (stats.correct === 10) {
    mark = 'Perfect!';
  } else if (stats.correct >= 8) {
    mark = 'Good job';
  } else if (stats.correct >= 5) {
    mark = 'Poor job';
  } else if (stats.correct >= 2) {
    mark = 'Very bad';
  } else {
    mark = 'Awful';
  }

  return (
    <>
      <Header style={{ paddingTop: '150px' }}>
        <Question level={1}>
          {mark} <br /> {`You got ${stats.correct}/10`}
        </Question>
      </Header>

      <QuestionResultsWrapper>
        {results.map((result, idx) => (
          <QuestionResult result={result} key={idx} number={idx + 1} />
        ))}
      </QuestionResultsWrapper>
    </>
  );
};

export default Results;
