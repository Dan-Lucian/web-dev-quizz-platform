import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStart = ({ text, onClick }) => (
  <StyledButtonStart id="button-start" onClick={onClick}>
    {text}
  </StyledButtonStart>
);

ButtonStart.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const StyledButtonStart = styled.button`
  padding: 10px 30px;
  text-align: center;
  font-family: inherit;
  border: 3px solid ${(p) => p.theme.color.text};
  color: ${(p) => p.theme.color.text};
  font-size: 1.5em;
  background: ${(p) => p.theme.color.bg};
  box-shadow: 0 5px 0 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background: ${(p) => p.theme.color.text};
      border: 3px solid ${(p) => p.theme.color.bg};
      color: ${(p) => p.theme.color.bg};
    }
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.25);
  }
`;

export default ButtonStart;
