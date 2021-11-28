import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledFail } from './StyledFail';

const Text = ({ children }) => <StyledText>{children}</StyledText>;

Text.propTypes = {
  children: PropTypes.node,
};

const StyledText = styled.p`
  ${StyledFail} &:nth-child(2) {
    margin: 1.5em 0;
  }
`;

export default Text;
