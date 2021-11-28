import styled from 'styled-components';
import PropTypes from 'prop-types';

const TestPageWrapper = ({ children }) => (
  <StyledTestPageWrapper>{children}</StyledTestPageWrapper>
);

TestPageWrapper.propTypes = {
  children: PropTypes.node,
};

const StyledTestPageWrapper = styled.main`
  margin-top: 8em;
  width: 85vw;
  max-width: 1320px;
  margin-bottom: 10em;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    width: 75vw;
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    width: 70vw;
  }
`;

export default TestPageWrapper;
