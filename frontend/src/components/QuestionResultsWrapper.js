import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuestionResultsWrapper = ({ children }) => (
  <StyledQuestionResultsWrapper>{children}</StyledQuestionResultsWrapper>
);

QuestionResultsWrapper.propTypes = {
  children: PropTypes.node,
};

const StyledQuestionResultsWrapper = styled.ol`
  width: 85vw;
  padding: 2em 0;
  margin: 0 auto;
  background-color: ${(p) => p.theme.color.bgAccent};
  margin-bottom: 6em;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    width: 725px;
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    width: 990px;
  }

  @media (min-width: ${(p) => p.theme.screen.xlg}) {
    width: 1320px;
  }
`;

export default QuestionResultsWrapper;
