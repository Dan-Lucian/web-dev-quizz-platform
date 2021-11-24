import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButtonStart = styled.button`
  padding: 10px 30px;
  text-align: center;
  font-family: inherit;
  border: 3px solid ${(props) => props.theme.colorText};
  color: ${(props) => props.theme.colorText};
  font-size: 1.5em;
  background: ${(props) => props.theme.colorBg};
`;

const ButtonStart = ({ text }) => <StyledButtonStart>{text}</StyledButtonStart>;

ButtonStart.propTypes = {
  text: PropTypes.string,
};

export default ButtonStart;
