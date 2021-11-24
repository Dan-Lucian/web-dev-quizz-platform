import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colorBgAccent};
  padding: 1.5em;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>;

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
