import styled from 'styled-components';
import PropTypes from 'prop-types';

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>;

Footer.propTypes = {
  children: PropTypes.node,
};

const StyledFooter = styled.footer`
  background: ${(p) => p.theme.color.bgAccent};
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;