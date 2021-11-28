import { useLocation } from 'react-router-dom';
import ResultsHeader from '../components/ResultsHeader';
import QuestionResult from '../components/QuestionResult';
import QuestionResultsWrapper from '../components/QuestionResultsWrapper';
import HCenter from '../components/HCenter';
import ResultsWrapper from '../components/ResultsWrapper';

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
    <HCenter>
      <ResultsWrapper>
        <ResultsHeader>
          {mark} <br /> {`You got ${stats.correct}/10`}
        </ResultsHeader>

        <QuestionResultsWrapper>
          {results.map((result, idx) => (
            <QuestionResult result={result} key={idx} number={idx + 1} />
          ))}
        </QuestionResultsWrapper>
      </ResultsWrapper>
    </HCenter>
  );
};

export default Results;
