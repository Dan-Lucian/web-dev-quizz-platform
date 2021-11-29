import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

Wrapper.propTypes = {
  children: PropTypes.node,
};

const StyledWrapper = styled.main`
  margin-top: 6em;
  width: 85vw;
  max-width: 1320px;
  margin-bottom: 6em;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    width: 75vw;
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    width: 70vw;
  }
`;

export default Wrapper;
