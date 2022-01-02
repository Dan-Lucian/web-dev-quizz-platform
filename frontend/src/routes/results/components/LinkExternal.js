import styled from 'styled-components';

import LinkExternal from '../../../components/LinkExternal';

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: underline;
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

export default StyledLinkExternal;
