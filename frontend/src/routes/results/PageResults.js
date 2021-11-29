import { useLocation, Link } from 'react-router-dom';

// shared components
import HCenter from '../../components/HCenter';

// local components
import Heading from './components/Heading';
import Question from './components/Question';
import WrapperQuestions from './components/WrapperQuestions';
import Wrapper from './components/Wrapper';
import LinkInternal from './components/LinkInternal';

// get the text depending on the correctly answered questions
const getMarkTest = (number) => {
  let text;

  if (number === 10) {
    text = 'Perfect!';
  } else if (number >= 8) {
    text = 'Good job';
  } else if (number >= 5) {
    text = 'Poor job';
  } else if (number >= 2) {
    text = 'Very bad';
  } else {
    text = 'Awful';
  }

  return text;
};

const PageResults = () => {
  const { state: results } = useLocation();

  const stats = { correct: 0, wrong: 0 };
  results.forEach((question) => {
    if (question.passed) {
      stats.correct += 1;
    } else {
      stats.wrong += 1;
    }
  });

  return (
    <HCenter>
      <Wrapper>
        <Heading>
          {getMarkTest(stats.correct)} <br /> {`You got ${stats.correct}/10`}
        </Heading>

        <WrapperQuestions>
          {results.map((result, idx) => (
            <Question result={result} key={idx} number={idx + 1} />
          ))}
        </WrapperQuestions>

        <LinkInternal>
          <Link to="/">Return to homepage</Link>
        </LinkInternal>
      </Wrapper>
    </HCenter>
  );
};

export default PageResults;
