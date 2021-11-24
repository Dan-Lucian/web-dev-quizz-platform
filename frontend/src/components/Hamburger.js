import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLines = styled.div`
  width: 36px;
  height: 3px;
  background-color: ${(props) => props.theme.colorHamburger};
  position: relative;
  transition: transform 0.075s ease;

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
    transition: bottom 0.075s 0.12s ease;
  }

  &::after {
    bottom: -10px;
    transition: bottom 0.075s 0.12s ease, transform 0.075s ease;
  }

  ${(props) =>
    props.isMenuOpen &&
    `
    transform: rotate(45deg);
    transition-delay: 0.12s;

    &::before {
      bottom: 0;
      transition: bottom 0.075s ease;
    }

    &::after {
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 0.075s ease, transform 0.075s 0.12s ease;
    }
  `}
`;

const StyledHamburgerContainer = styled.button`
  height: 40px;
  width: 50px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    display: none;
  }
`;

const Hamburger = ({ isMenuOpen, onClick }) => (
  <StyledHamburgerContainer onClick={onClick}>
    <StyledLines isMenuOpen={isMenuOpen} />
  </StyledHamburgerContainer>
);
Hamburger.propTypes = {
  onClick: PropTypes.func,
  isMenuOpen: PropTypes.bool,
};

export default Hamburger;
