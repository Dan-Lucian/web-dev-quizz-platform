import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  padding: 130px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colorBg};
`;

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

Header.propTypes = {
  children: PropTypes.array,
};

export default Header;
