import styled from 'styled-components';
import PropTypes from 'prop-types';

// local components
import LinkExternal from './LinkExternal';

const Question = ({ number, passed, question, moreInfo }) => (
  <StyledWrapperQuestion>
    <StyledQuestion colorBg={passed ? 'green' : 'red'}>
      <span>{number}.</span>
      {question}
    </StyledQuestion>
    <LinkExternal colorBorder={passed ? 'green' : 'red'} href={moreInfo}>
      learn more
    </LinkExternal>
  </StyledWrapperQuestion>
);

Question.propTypes = {
  number: PropTypes.number,
  passed: PropTypes.bool,
  question: PropTypes.string,
  moreInfo: PropTypes.string,
};

export const StyledWrapperQuestion = styled.li`
  margin-bottom: 1.5em;
  position: relative;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin: 0;
  }
`;

const StyledQuestion = styled.p`
  display: block;
  padding: 0.8em;
  line-height: 1.4em;
  display: flex;
  background: ${(p) => p.theme.color[p.colorBg]};

  span {
    margin-right: 0.5em;
    display: block;
  }
`;

export default Question;
