import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = ({ children, style }) => (
  <StyledHeaderShared style={style}>{children}</StyledHeaderShared>
);

Header.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

const StyledHeaderShared = styled.header`
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colorBg};
`;

export { StyledHeaderShared };

export default Header;
