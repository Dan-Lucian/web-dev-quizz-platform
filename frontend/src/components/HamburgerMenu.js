import styled from 'styled-components';
import PropTypes from 'prop-types';

const HamburgerMenu = ({ children, isMenuOpen }) => (
  <StyledHamburgerMenu
    style={{ '--display-menu': isMenuOpen ? 'flex' : 'none' }}
  >
    {children}
  </StyledHamburgerMenu>
);

HamburgerMenu.propTypes = {
  children: PropTypes.node,
  isMenuOpen: PropTypes.bool,
};

const StyledHamburgerMenu = styled.div`
  background-color: ${(p) => p.theme.color.text};
  color: ${(p) => p.theme.color.bgAccent};
  position: absolute;
  right: 0.5em;
  top: 80%;
  display: var(--display-menu, none);
  flex-direction: column;
  padding: 1.5em;
  font-size: 1.3em;

  a {
    padding: 5px 2px;
  }

  a:first-child {
    margin-bottom: 0.8em;
  }

  a:link,
  a:visited {
    color: ${(p) => p.theme.color.bgAccent};
    text-decoration: none;
  }

  a:hover {
    color: ${(p) => p.theme.color.text};
    background-color: ${(p) => p.theme.color.bgAccent};
  }
`;

export default HamburgerMenu;
