import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';

const QuestionResult = ({ result, number }) => {
  if (result.passed) {
    return (
      <StyledQuestionWrapper>
        <StyledQuestionResultGreen>
          <span>{number}.</span>
          {result.question}
        </StyledQuestionResultGreen>
        <ExternalLink text="learn more" type="green" href={result.moreInfo} />
      </StyledQuestionWrapper>
    );
  }
  return (
    <StyledQuestionWrapper>
      <StyledQuestionResultRed>
        <span>{number}.</span>
        {result.question}
      </StyledQuestionResultRed>
      <ExternalLink text="learn more" type="red" href={result.moreInfo} />
    </StyledQuestionWrapper>
  );
};

QuestionResult.propTypes = {
  result: PropTypes.object,
  number: PropTypes.number,
};

export const StyledQuestionWrapper = styled.li`
  margin-bottom: 1.5em;
  position: relative;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin: 0;
  }
`;

const StyledQuestionResult = styled.p`
  display: block;
  padding: 0.8em;
  line-height: 1.4em;
  display: flex;

  span {
    margin-right: 0.5em;
    display: block;
  }
`;

const StyledQuestionResultGreen = styled(StyledQuestionResult)`
  background: ${(p) => p.theme.color.green};
`;

const StyledQuestionResultRed = styled(StyledQuestionResult)`
  background: ${(p) => p.theme.color.red};
`;

export default QuestionResult;
