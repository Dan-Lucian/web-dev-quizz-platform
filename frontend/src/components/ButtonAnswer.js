import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledButton } from './Button';

const ButtonAnswer = ({ text, onClick, isCorrect, isRevealed, disabled }) => {
  if (isRevealed) {
    return isCorrect ? (
      <StyledButtonAnswerCorrect disabled={disabled} onClick={onClick}>
        {text}
      </StyledButtonAnswerCorrect>
    ) : (
      <StyledButtonAnswerWrong disabled={disabled} onClick={onClick}>
        {text}
      </StyledButtonAnswerWrong>
    );
  }

  return (
    <StyledButtonAnswer disabled={disabled} onClick={onClick}>
      {text}
    </StyledButtonAnswer>
  );
};

ButtonAnswer.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isCorrect: PropTypes.bool,
  isRevealed: PropTypes.bool,
  disabled: PropTypes.bool,
};

const StyledButtonAnswer = styled(StyledButton)`
  box-shadow: 0 4px 0 rgba(255, 255, 255, 0.2);
  opacity: 1;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 rgba(255, 255, 255, 0.2);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    color: ${(p) => p.theme.color.bgAccent};
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

  &:hover {
    background: ${(p) => p.theme.color.green};
    color: ${(p) => p.theme.color.text};
  }
`;

const StyledButtonAnswerWrong = styled(StyledButtonAnswer)`
  background-color: ${(p) => p.theme.color.red};

  &:hover {
    background: ${(p) => p.theme.color.red};
    color: ${(p) => p.theme.color.text};
  }
`;

export default ButtonAnswer;
