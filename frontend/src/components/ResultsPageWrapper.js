import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResultsPageWrapper = ({ children }) => (
  <StyledResultsPageWrapper>{children}</StyledResultsPageWrapper>
);

ResultsPageWrapper.propTypes = {
  children: PropTypes.node,
};

const StyledResultsPageWrapper = styled.main`
  margin-top: 8em;
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

export default ResultsPageWrapper;
