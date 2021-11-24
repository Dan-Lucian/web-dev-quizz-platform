import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  height: 40px;
  width: 98px;
  opacity: 0.6;
  text-align: center;
  font-family: inherit;
  border: 0;
  border-radius: 2px;
  padding: 0;
  font-weight: 700;
  font-size: 1em;
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
