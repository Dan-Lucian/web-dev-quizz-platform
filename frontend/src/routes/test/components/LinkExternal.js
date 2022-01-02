import styled from 'styled-components';

import LinkExternal from '../../../components/LinkExternal';

const StyledLinkExternal = styled(LinkExternal)`
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

export default StyledLinkExternal;
