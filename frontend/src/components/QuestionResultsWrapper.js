import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuestionResultsWrapper = ({ children }) => (
  <StyledQuestionResultsWrapper>{children}</StyledQuestionResultsWrapper>
);

QuestionResultsWrapper.propTypes = {
  children: PropTypes.node,
};

const StyledQuestionResultsWrapper = styled.ol`
  padding-bottom: 2em;
  background-color: ${(p) => p.theme.color.bgAccent};
`;

export default QuestionResultsWrapper;
