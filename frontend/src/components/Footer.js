import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colorBg};
  height: 100px;
`;

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>;

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
