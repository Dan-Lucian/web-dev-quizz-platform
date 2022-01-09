import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperLinkInternal = ({ children }) => (
  <StyledWrapperLinkInternal>{children}</StyledWrapperLinkInternal>
);

WrapperLinkInternal.propTypes = {
  children: PropTypes.node,
};

const StyledWrapperLinkInternal = styled.div`
  display: flex;
  justify-content: right;
  margin: 2em 0;
`;

export default WrapperLinkInternal;
