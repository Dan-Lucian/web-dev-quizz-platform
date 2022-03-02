import PropTypes from 'prop-types';
import styled from 'styled-components';

// shared hooks
import { useScrollDirection } from '../hooks/useScrollDirection';

const Nav = ({ children }) => {
  const scrollDirection = useScrollDirection('up');

  return (
    <StyledNav
      style={{
        '--nav-opacity': scrollDirection === 'down' ? '0' : '1',
        '--nav-pointer-events': scrollDirection === 'down' ? 'none' : 'auto',
      }}
    >
      {children}
    </StyledNav>
  );
};

Nav.propTypes = {
  children: PropTypes.array,
};

const StyledNav = styled.nav`
  position: fixed;
  z-index: 100;
  padding: 6px 6%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.color.bgAccent};
  opacity: var(--nav-opacity);
  pointer-events: var(--nav-pointer-events);
  transition: opacity 100ms ease-in-out;
`;

export default Nav;
