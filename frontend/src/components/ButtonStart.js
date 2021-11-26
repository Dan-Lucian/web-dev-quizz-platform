import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButtonStart = styled.button`
  padding: 10px 30px;
  text-align: center;
  font-family: inherit;
  border: 3px solid ${(p) => p.theme.color.text};
  color: ${(p) => p.theme.color.text};
  font-size: 1.5em;
  background: ${(p) => p.theme.color.bg};
`;

const ButtonStart = ({ text }) => <StyledButtonStart>{text}</StyledButtonStart>;

ButtonStart.propTypes = {
  text: PropTypes.string,
};

export default ButtonStart;
