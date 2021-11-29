import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledPopupFail } from '../routes/test/components/PopupFail.styles';

const ExternalLink = ({ type, text, href }) => {
  const props = {
    target: '_blank',
    href,
  };

  switch (type) {
    case 'green':
      return (
        <StyledExternalLinkGreen {...props}>{text}</StyledExternalLinkGreen>
      );

    case 'red':
      return <StyledExternalLinkRed {...props}>{text}</StyledExternalLinkRed>;

    default:
      return <StyledExternalLink {...props}>{text}</StyledExternalLink>;
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

  &:hover {
    background: ${(p) => p.theme.color.text};
    color: ${(p) => p.theme.color.bgAccent};
  }

  ${StyledPopupFail} & {
    text-decoration: underline;
    padding: 0.3em;
    border: none;
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
