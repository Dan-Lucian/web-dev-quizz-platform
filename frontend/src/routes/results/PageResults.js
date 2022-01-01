import { useLocation, Link } from 'react-router-dom';

// shared components
import HCenter from '../../components/HCenter';

// local components
import Heading from './components/Heading';
import Question from './components/Question';
import WrapperQuestions from './components/WrapperQuestions';
import Wrapper from './components/Wrapper';
import LinkInternal from './components/LinkInternal';

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

const PageResults = () => {
  const { state: results } = useLocation();

  const correctAnswers = results.filter((result) => result.passed).length;
  const mark = getMarkTest(correctAnswers);

  return (
    <HCenter>
      <Wrapper>
        <Heading>
          {mark} <br /> {`You got ${correctAnswers}/10`}
        </Heading>

        <WrapperQuestions>
          {results.map((result, idx) => (
            <Question result={result} key={idx} number={idx + 1} />
          ))}
        </WrapperQuestions>

        <LinkInternal to="/">Return to homepage</LinkInternal>
      </Wrapper>
    </HCenter>
  );
};

export default PageResults;
