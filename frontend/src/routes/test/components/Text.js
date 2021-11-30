import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = ({ children }) => <StyledText>{children}</StyledText>;

Text.propTypes = {
  children: PropTypes.node,
};

const StyledText = styled.p`
  &:nth-child(2) {
    margin: 1.5em 0;
  }
`;

export default Text;
