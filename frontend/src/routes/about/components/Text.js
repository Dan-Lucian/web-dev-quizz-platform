import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = ({ children, textAlign }) => {
  switch (textAlign) {
    case 'center':
      return <StyledTextCenter>{children}</StyledTextCenter>;

    default:
      return <StyledText>{children}</StyledText>;
  }
};

Text.propTypes = {
  children: PropTypes.node,
  textAlign: PropTypes.string,
};

const StyledText = styled.p`
  &:not(:last-child) {
    margin-bottom: 2em;
  }
`;

const StyledTextCenter = styled.p`
  &:not(:last-child) {
    margin-bottom: 2em;
  }

  text-align: center;
`;

export default Text;
