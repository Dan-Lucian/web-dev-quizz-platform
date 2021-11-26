import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = ({ children }) => <StyledNav>{children}</StyledNav>;

Nav.propTypes = {
  children: PropTypes.array,
};

const StyledNav = styled.nav`
  position: fixed;
  z-index: 100;
  top: 20px;
  left: 10%;
  right: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Nav;
