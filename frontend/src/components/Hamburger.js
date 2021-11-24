import styled from 'styled-components';

const StyledHamburger = styled.div`
  width: 36px;
  height: 3px;
  background-color: ${(props) => props.theme.colorHamburger};
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 36px;
    height: 3px;
    background-color: ${(props) => props.theme.colorHamburger};
    position: absolute;
  }

  &::before {
    bottom: 10px;
  }

  &::after {
    bottom: -10px;
  }
`;

const Hamburger = () => <StyledHamburger />;

export default Hamburger;
