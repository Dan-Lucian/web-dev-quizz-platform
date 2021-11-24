import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  z-index: 100;
  top: 20px;
  left: 0;
  right: 0;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = ({ children }) => <StyledNav>{children}</StyledNav>;
Nav.propTypes = {
  children: PropTypes.array,
};

export default Nav;
