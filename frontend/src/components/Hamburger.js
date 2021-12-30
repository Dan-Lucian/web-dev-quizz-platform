import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// shared components
import HamburgerIcon from './HamburgerIcon';
import HamburgerMenu from './HamburgerMenu';

// shared hooks
import { useToggle } from '../hooks/useToggle';
import { useOutsideClick } from '../hooks/useOutsideClick';

const Hamburger = () => {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);
  const refHamburger = useRef(null);
  const isClickOutside = useOutsideClick(refHamburger);

  useEffect(() => {
    if (isClickOutside) toggleMenuOpen(false);
  }, [isClickOutside, toggleMenuOpen]);

  return (
    <StyledHamburger ref={refHamburger}>
      <HamburgerIcon isMenuOpen={isMenuOpen} onClick={toggleMenuOpen} />
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen}>
        <Link onClick={toggleMenuOpen} to="/">
          Home
        </Link>
        <Link onClick={toggleMenuOpen} to="/about">
          About
        </Link>
      </HamburgerMenu>
    </StyledHamburger>
  );
};

const StyledHamburger = styled.div`
  @media (min-width: ${(p) => p.theme.screen.med}) {
    display: none;
  }
`;

export default Hamburger;
