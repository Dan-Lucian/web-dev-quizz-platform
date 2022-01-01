import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = ({ children, textAlign = 'left' }) => (
  <StyledText textAlign={textAlign}>{children}</StyledText>
);

Text.propTypes = {
  children: PropTypes.node,
  textAlign: PropTypes.string,
};

const StyledText = styled.p`
  line-height: 1.5;
  text-align: ${(p) => p.textAlign};

  &:not(:last-child) {
    margin-bottom: 2em;
  }
`;

export default Text;
