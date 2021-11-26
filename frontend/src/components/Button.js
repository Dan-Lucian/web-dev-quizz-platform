import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ text, type, pressed, onClick }) => {
  const props = {
    pressed,
    onClick,
    style: {
      '--btn-opacity': pressed ? '1' : '0.5',
    },
  };

  switch (type) {
    case '1':
      return <StyledButton1 {...props}>{text}</StyledButton1>;

    case '2':
      return <StyledButton2 {...props}>{text}</StyledButton2>;

    case '3':
      return <StyledButton3 {...props}>{text}</StyledButton3>;

    case '4':
      return <StyledButton4 {...props}>{text}</StyledButton4>;

    case '5':
      return <StyledButton5 {...props}>{text}</StyledButton5>;

    default:
      return <StyledButton {...props}>{text}</StyledButton>;
  }
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  pressed: PropTypes.bool,
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
  background-color: #000;
  color: #fff;

  &:hover {
    opacity: 1;
  }

  @media (min-width: ${(props) => props.theme.screen.med}) {
    font-weight: 400;
  }
`;

const StyledButton1 = styled(StyledButton)`
  background-color: ${(p) => p.theme.color.bgBtn1};
  color: ${(p) => p.theme.color.textBtn1};
`;

const StyledButton2 = styled(StyledButton)`
  background-color: ${(p) => p.theme.color.bgBtn2};
  color: ${(p) => p.theme.color.textBtn2};
`;

const StyledButton3 = styled(StyledButton)`
  background-color: ${(p) => p.theme.color.bgBtn3};
  color: ${(p) => p.theme.color.textBtn3};
`;

const StyledButton4 = styled(StyledButton)`
  background-color: ${(p) => p.theme.color.bgBtn4};
  color: ${(p) => p.theme.color.textBtn4};
`;

const StyledButton5 = styled(StyledButton)`
  background-color: ${(p) => p.theme.color.bgBtn5};
  color: ${(p) => p.theme.color.textBtn5};
`;

export default Button;
