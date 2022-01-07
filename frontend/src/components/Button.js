import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ text, color, pressed, onClick }) => {
  const props = {
    pressed,
    onClick,
    style: {
      '--btn-opacity': pressed ? '1' : '0.5',
    },
    color: color || {
      bg: '#ddd',
      text: '#000',
    },
    type: 'button',
  };

  return <StyledButtonShared {...props}>{text}</StyledButtonShared>;
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.object,
  pressed: PropTypes.bool,
  onClick: PropTypes.func,
};

export const StyledButtonShared = styled.button`
  padding: 0;
  border: 0;
  border-radius: 2px;
  font-size: 1em;
  font-family: inherit;
  font-weight: 700;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  opacity: var(--btn-opacity, 0.5);
  background-color: ${(p) => p.color.bg};
  color: ${(p) => p.color.text};

  @media (min-width: ${(props) => props.theme.screen.med}) {
    font-weight: 400;
  }

  // fixes sticky hover on mobile
  @media (hover: hover) {
    &:hover {
      opacity: ${(p) => (p.theme.isTouch ? 'none' : '1')};
    }
  }
`;

export default Button;
