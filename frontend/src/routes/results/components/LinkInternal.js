import styled from 'styled-components';
import LinkInternal from '../../../components/LinkInternal';

const StyledLinkInternal = styled(LinkInternal)`
  display: inline-block;
  padding: 1em 2em;
  background-color: ${(p) => p.theme.color.bgAccent};

  &:link,
  &:visited {
    color: ${(p) => p.theme.color.text};
    text-decoration: none;
  }

  &:hover {
    color: ${(p) => p.theme.color.bgAccent};
    background-color: ${(p) => p.theme.color.text};
  }
`;

export default StyledLinkInternal;
