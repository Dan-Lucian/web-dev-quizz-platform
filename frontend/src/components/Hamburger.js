import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRef } from 'react';

// shared components
import HamburgerIcon from './HamburgerIcon';
import HamburgerMenu from './HamburgerMenu';

// shared hooks
import { useOutsideClick } from '../hooks/useOutsideClick';

const Hamburger = ({ children, isMenuOpen, toggleMenuOpen }) => {
  const refHamburger = useRef(null);
  useOutsideClick(refHamburger, () => toggleMenuOpen(false));

  return (
    <StyledHamburger ref={refHamburger}>
      <HamburgerIcon isMenuOpen={isMenuOpen} onClick={toggleMenuOpen} />
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen}>
        {children}
      </HamburgerMenu>
    </StyledHamburger>
  );
};

Hamburger.propTypes = {
  children: PropTypes.node,
  isMenuOpen: PropTypes.bool,
  toggleMenuOpen: PropTypes.func,
};

const StyledHamburger = styled.div``;

export default Hamburger;
