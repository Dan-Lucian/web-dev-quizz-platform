import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResultsWrapper = ({ children }) => (
  <StyledResultsWrapper>{children}</StyledResultsWrapper>
);

ResultsWrapper.propTypes = {
  children: PropTypes.node,
};

const StyledResultsWrapper = styled.main`
  margin-top: 150px;
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

export default ResultsWrapper;
