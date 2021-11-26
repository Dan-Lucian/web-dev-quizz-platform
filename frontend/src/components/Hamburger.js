import styled from 'styled-components';
import PropTypes from 'prop-types';

const Hamburger = ({ isMenuOpen, onClick }) => (
  <StyledHamburgerContainer onClick={onClick}>
    <StyledLines isMenuOpen={isMenuOpen} />
  </StyledHamburgerContainer>
);

Hamburger.propTypes = {
  onClick: PropTypes.func,
  isMenuOpen: PropTypes.bool,
};

const StyledLines = styled.div`
  width: 36px;
  height: 3px;
  background-color: ${(p) => p.theme.color.hamburger};
  position: relative;
  transition: transform 0.075s ease;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 36px;
    height: 3px;
    background-color: ${(p) => p.theme.color.hamburger};
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

  ${(p) =>
    p.isMenuOpen &&
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

  @media (min-width: ${(p) => p.theme.screen.med}) {
    display: none;
  }
`;

export default Hamburger;
