import styled from 'styled-components';
import PropTypes from 'prop-types';

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>;

Footer.propTypes = {
  children: PropTypes.node,
};

const StyledFooter = styled.footer`
  background: ${(p) => p.theme.color.bgAccent};
  padding: 1em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  address {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Footer;
