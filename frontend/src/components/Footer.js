import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFooter = styled.footer`
  background: ${(p) => p.theme.color.bgAccent};
  padding: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>;

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
