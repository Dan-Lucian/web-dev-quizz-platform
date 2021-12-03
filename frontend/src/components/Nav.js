import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = ({ children, hidden }) => {
  if (hidden) return <StyledHiddenNav>{children}</StyledHiddenNav>;

  return <StyledNav>{children}</StyledNav>;
};

Nav.propTypes = {
  children: PropTypes.array,
  hidden: PropTypes.bool,
};

const StyledNav = styled.nav`
  position: fixed;
  z-index: 100;
  padding: 16px 6%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.color.bg};
`;

const StyledHiddenNav = styled(StyledNav)`
  display: none;
`;

export default Nav;
