import styled from 'styled-components';
import PropTypes from 'prop-types';

const FallbackErrorRoute = ({ error }) => (
  <StyledFallbackErrorRoute role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </StyledFallbackErrorRoute>
);

FallbackErrorRoute.propTypes = {
  error: PropTypes.object,
};

const StyledFallbackErrorRoute = styled.div`
  line-height: 1.5;
  color: ${(p) => p.theme.color.red};
`;

export default FallbackErrorRoute;
