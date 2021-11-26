import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ text, colorText, colorBg, pressed, onClick }) => (
  <StyledButton
    pressed={pressed}
    onClick={onClick}
    style={{
      color: colorText,
      backgroundColor: colorBg,
      '--btn-opacity': pressed ? '1' : '0.5',
    }}
  >
    {text}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  colorText: PropTypes.string.isRequired,
  colorBg: PropTypes.string.isRequired,
  pressed: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

const StyledButton = styled.button`
  opacity: var(--btn-opacity, 0.5);
  text-align: center;
  font-family: inherit;
  border: 0;
  border-radius: 2px;
  padding: 0;
  font-weight: 700;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media (min-width: ${(props) => props.theme.screen.med}) {
    font-weight: 400;
  }
`;

export default Button;
