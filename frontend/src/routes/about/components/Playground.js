import styled from 'styled-components';
import PropTypes from 'prop-types';

const Playground = ({ children }) => (
  <StyledPlayground>
    <div />
    {children}
  </StyledPlayground>
);

Playground.propTypes = {
  children: PropTypes.node,
};

const StyledPlayground = styled.div`
  block-size: 200px;

  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 2%,
    rgba(198, 77, 63, 1) 23%,
    rgba(1, 110, 150, 0.732388916015625) 52%,
    rgba(145, 1, 176, 1) 71%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export default Playground;
