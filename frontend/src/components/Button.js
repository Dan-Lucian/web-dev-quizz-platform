import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  opacity: 0.5;
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

const Button = ({ text, colorText, colorBg }) => (
  <StyledButton style={{ color: colorText, backgroundColor: colorBg }}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  colorText: PropTypes.string.isRequired,
  colorBg: PropTypes.string.isRequired,
};

export default Button;
