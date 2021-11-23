import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  height: 40px;
  width: 97px;
  font-weight: 700;
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
