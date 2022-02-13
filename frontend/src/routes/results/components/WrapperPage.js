import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperPage = ({ children }) => (
  <StyledWrapperPage>{children}</StyledWrapperPage>
);

WrapperPage.propTypes = {
  children: PropTypes.node,
};

const StyledWrapperPage = styled.main`
  margin: 0 auto;
  padding-top: 6em;
  padding-bottom: 6em;
  width: 85vw;
  max-width: 1320px;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    width: 75vw;
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    width: 70vw;
  }
`;

export default WrapperPage;
