/* eslint-disable no-use-before-define */
import { useLocation } from 'react-router-dom';

// local components
import Heading from './components/Heading';
import Question from './components/Question';
import WrapperQuestions from './components/WrapperQuestions';
import WrapperPage from './components/WrapperPage';
import LinkInternal from './components/LinkInternal';
import WrapperLinkInternal from './components/WrapperLinkInternal';

const PageResults = () => {
  const { state: results } = useLocation();

  const correctAnswers = results.filter((result) => result.passed).length;
  const mark = getMarkTest(correctAnswers);

  return (
    <WrapperPage>
      <Heading>
        {mark} <br /> {`You got ${correctAnswers}/10`}
      </Heading>

      <WrapperQuestions>
        {results.map((result, idx) => (
          <Question
            number={idx + 1}
            passed={result.passed}
            question={result.question}
            moreInfo={result.moreInfo}
            key={idx}
          />
        ))}
      </WrapperQuestions>

      <WrapperLinkInternal>
        <LinkInternal to="/">Return to homepage</LinkInternal>
      </WrapperLinkInternal>
    </WrapperPage>
  );
};

// get result text by the nr of correct answers
const getMarkTest = (number) => {
  if (number === 10) {
    return 'Perfect!';
  }
  if (number >= 8) {
    return 'Good job';
  }
  if (number >= 5) {
    return 'Poor job';
  }
  if (number >= 2) {
    return 'Very bad';
  }
  return 'Awful';
};

export default PageResults;
