import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkExternal = ({ text, href }) => (
  <StyledLinkExternal target="_blank" rel="noopener noreferrer" href={href}>
    {text}
  </StyledLinkExternal>
);

LinkExternal.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};

const StyledLinkExternal = styled.a`
  background: ${(p) => p.theme.color.bg};
  text-decoration: none;
  display: inline-block;
  font-size: 0.9em;
  text-decoration: underline;
  padding: 0.3em;
  border: none;

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
