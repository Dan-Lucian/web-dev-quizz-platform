import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledButtonShared } from '../../../components/Button';

const Button = ({ text, onClick, isCorrect, isRevealed, disabled }) => {
  if (isRevealed) {
    return isCorrect ? (
      <StyledButtonCorrect disabled={disabled} onClick={onClick}>
        {text}
      </StyledButtonCorrect>
    ) : (
      <StyledButtonWrong disabled={disabled} onClick={onClick}>
        {text}
      </StyledButtonWrong>
    );
  }

  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isCorrect: PropTypes.bool,
  isRevealed: PropTypes.bool,
  disabled: PropTypes.bool,
};

const StyledButton = styled(StyledButtonShared)`
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

const StyledButtonCorrect = styled(StyledButton)`
  background-color: ${(p) => p.theme.color.green};

  &:hover {
    background: ${(p) => p.theme.color.green};
    color: ${(p) => p.theme.color.text};
  }
`;

const StyledButtonWrong = styled(StyledButton)`
  background-color: ${(p) => p.theme.color.red};

  &:hover {
    background: ${(p) => p.theme.color.red};
    color: ${(p) => p.theme.color.text};
  }
`;

export default Button;
