import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExternalLink from '../../../components/ExternalLink';

const Question = ({ result, number }) => {
  if (result.passed) {
    return (
      <StyledWrapperQuestion>
        <StyledQuestionGreen>
          <span>{number}.</span>
          {result.question}
        </StyledQuestionGreen>
        <ExternalLink text="learn more" type="green" href={result.moreInfo} />
      </StyledWrapperQuestion>
    );
  }
  return (
    <StyledWrapperQuestion>
      <StyledQuestionRed>
        <span>{number}.</span>
        {result.question}
      </StyledQuestionRed>
      <ExternalLink text="learn more" type="red" href={result.moreInfo} />
    </StyledWrapperQuestion>
  );
};

Question.propTypes = {
  result: PropTypes.object,
  number: PropTypes.number,
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

  span {
    margin-right: 0.5em;
    display: block;
  }
`;

const StyledQuestionGreen = styled(StyledQuestion)`
  background: ${(p) => p.theme.color.green};
`;

const StyledQuestionRed = styled(StyledQuestion)`
  background: ${(p) => p.theme.color.red};
`;

export default Question;
