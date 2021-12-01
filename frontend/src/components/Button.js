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
      return <StyledButtonShared1 {...props}>{text}</StyledButtonShared1>;

    case '2':
      return <StyledButtonShared2 {...props}>{text}</StyledButtonShared2>;

    case '3':
      return <StyledButtonShared3 {...props}>{text}</StyledButtonShared3>;

    case '4':
      return <StyledButtonShared4 {...props}>{text}</StyledButtonShared4>;

    case '5':
      return <StyledButtonShared5 {...props}>{text}</StyledButtonShared5>;

    default:
      return <StyledButtonShared {...props}>{text}</StyledButtonShared>;
  }
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  pressed: PropTypes.bool,
  onClick: PropTypes.func,
};

export const StyledButtonShared = styled.button`
  opacity: var(--btn-opacity, 0.5);
  text-align: center;
  font-family: inherit;
  border: 0;
  border-radius: 2px;
  padding: 0;
  font-weight: 700;
  font-size: 1em;
  cursor: pointer;
  background-color: ${(p) => p.theme.color.bgAccent};
  color: #fff;

  @media (hover: hover) {
    &:hover {
      opacity: ${(p) => (p.theme.isTouch ? 'none' : '1')};
    }
  }

  @media (min-width: ${(props) => props.theme.screen.med}) {
    font-weight: 400;
  }
`;

const StyledButtonShared1 = styled(StyledButtonShared)`
  background-color: ${(p) => p.theme.color.bgBtn1};
  color: ${(p) => p.theme.color.textBtn1};
`;

const StyledButtonShared2 = styled(StyledButtonShared)`
  background-color: ${(p) => p.theme.color.bgBtn2};
  color: ${(p) => p.theme.color.textBtn2};
`;

const StyledButtonShared3 = styled(StyledButtonShared)`
  background-color: ${(p) => p.theme.color.bgBtn3};
  color: ${(p) => p.theme.color.textBtn3};
`;

const StyledButtonShared4 = styled(StyledButtonShared)`
  background-color: ${(p) => p.theme.color.bgBtn4};
  color: ${(p) => p.theme.color.textBtn4};
`;

const StyledButtonShared5 = styled(StyledButtonShared)`
  background-color: ${(p) => p.theme.color.bgBtn5};
  color: ${(p) => p.theme.color.textBtn5};
`;

export default Button;
