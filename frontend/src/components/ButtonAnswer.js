import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledButton } from './Button';

const ButtonAnswer = ({ text, onClick, isCorrect, isRevealed }) => {
  if (isRevealed) {
    return isCorrect ? (
      <StyledButtonAnswerCorrect onClick={onClick}>
        {text}
      </StyledButtonAnswerCorrect>
    ) : (
      <StyledButtonAnswerWrong onClick={onClick}>
        {text}
      </StyledButtonAnswerWrong>
    );
  }

  return <StyledButtonAnswer onClick={onClick}>{text}</StyledButtonAnswer>;
};

ButtonAnswer.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isCorrect: PropTypes.bool,
  isRevealed: PropTypes.bool,
};

const StyledButtonAnswer = styled(StyledButton)`
  box-shadow: 0 4px 0 rgba(255, 255, 255, 0.2);
  opacity: 1;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 rgba(255, 255, 255, 0.2);
  }

  &:hover {
    outline: 3px solid ${(p) => p.theme.color.green};
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    box-shadow: 0 6px 0 rgba(255, 255, 255, 0.2);

    &:active {
      transform: translateY(4px);
      box-shadow: 0 2px 0 rgba(255, 255, 255, 0.2);
    }
  }
`;

const StyledButtonAnswerCorrect = styled(StyledButtonAnswer)`
  background-color: ${(p) => p.theme.color.green};
`;

const StyledButtonAnswerWrong = styled(StyledButtonAnswer)`
  background-color: ${(p) => p.theme.color.red};
`;

export default ButtonAnswer;
