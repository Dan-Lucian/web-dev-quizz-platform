import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = ({ children, style }) => (
  <StyledHeader style={style}>{children}</StyledHeader>
);

Header.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

const StyledHeader = styled.header`
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colorBg};
`;

export default Header;
