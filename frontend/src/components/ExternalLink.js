import styled from 'styled-components';
import PropTypes from 'prop-types';

const ExternalLink = ({ type, text, href }) => {
  switch (type) {
    case 'green':
      return (
        <StyledExternalLinkGreen href={href}>{text}</StyledExternalLinkGreen>
      );

    case 'red':
      return <StyledExternalLinkRed href={href}>{text}</StyledExternalLinkRed>;

    default:
      return <StyledExternalLink href={href}>{text}</StyledExternalLink>;
  }
};

ExternalLink.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};

const StyledExternalLink = styled.a`
  background: ${(p) => p.theme.color.bg};
  text-decoration: none;
  display: inline-block;
  font-size: 0.9em;
  padding: 0.7em 1.8em;

  &:link,
  &:visited,
  &:active {
    color: ${(p) => p.theme.color.text};
  }
`;

const StyledExternalLinkRed = styled(StyledExternalLink)`
  border: 3px solid ${(p) => p.theme.color.red};
  align-self: flex-end;
`;

const StyledExternalLinkGreen = styled(StyledExternalLink)`
  border: 3px solid ${(p) => p.theme.color.green};
  align-self: flex-end;
`;

export default ExternalLink;
