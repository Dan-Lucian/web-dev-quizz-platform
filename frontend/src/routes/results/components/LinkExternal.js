import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkExternal = ({ colorBorder, href, children }) => {
  const props = {
    target: '_blank',
    rel: 'noopener noreferrer',
    href,
    colorBorder,
  };

  return <StyledLinkExternal {...props}>{children}</StyledLinkExternal>;
};

LinkExternal.propTypes = {
  colorBorder: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};

const StyledLinkExternal = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: 0.9em;
  padding: 0.7em 1.8em;
  align-self: flex-end;
  background: ${(p) => p.theme.color.bg};
  border: 3px solid ${(p) => p.theme.color[p.colorBorder]};
  border-top: none;

  &:link,
  &:visited,
  &:active {
    color: ${(p) => p.theme.color.text};
  }

  &:hover {
    background: ${(p) => p.theme.color.text};
    color: ${(p) => p.theme.color.bgAccent};
  }
`;

export default LinkExternal;
