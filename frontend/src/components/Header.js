import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  height: 300px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.colorBg};
`;

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

Header.propTypes = {
  children: PropTypes.array,
};

export default Header;
