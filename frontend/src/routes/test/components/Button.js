import styled from 'styled-components';
import PropTypes from 'prop-types';

// extension of
import { StyledButtonShared } from '../../../components/Button';

// specific parent environment
import { StyledPopupFail } from './PopupFail.styles.js';

const Button = ({ text, onClick, isCorrect, isRevealed, disabled }) => {
  const props = {
    disabled,
    onClick,
    type: 'button',
  };

  if (isRevealed) {
    return isCorrect ? (
      <StyledButtonCorrect {...props}>{text}</StyledButtonCorrect>
    ) : (
      <StyledButtonWrong {...props}>{text}</StyledButtonWrong>
    );
  }

  return <StyledButton {...props}>{text}</StyledButton>;
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

  @media (hover: hover) {
    &:hover {
      background: rgba(255, 255, 255, 0.8);
      color: ${(p) => p.theme.color.bgAccent};
    }
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    box-shadow: 0 6px 0 rgba(255, 255, 255, 0.2);

    &:active {
      transform: translateY(4px);
      box-shadow: 0 2px 0 rgba(255, 255, 255, 0.2);
    }
  }

  ${StyledPopupFail} & {
    background-color: ${(p) => p.theme.color.bg};
    color: ${(p) => p.theme.color.text};
    width: 100%;
    padding: 1em;
    opacity: 1;
    box-shadow: none;

    &:hover {
      background: ${(p) => p.theme.color.green};
    }

    &:active {
      transform: none;
    }
  }
`;

const StyledButtonCorrect = styled(StyledButton)`
  background-color: ${(p) => p.theme.color.green};

  @media (hover: hover) {
    &:hover {
      background: ${(p) => p.theme.color.green};
      color: ${(p) => p.theme.color.text};
    }
  }
`;

const StyledButtonWrong = styled(StyledButton)`
  background-color: ${(p) => p.theme.color.red};

  @media (hover: hover) {
    &:hover {
      background: ${(p) => p.theme.color.red};
      color: ${(p) => p.theme.color.text};
    }
  }
`;

export default Button;
