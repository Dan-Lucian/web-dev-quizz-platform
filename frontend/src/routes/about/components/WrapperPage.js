import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperPage = ({ children }) => (
  <StyledWrapperPage>{children}</StyledWrapperPage>
);

WrapperPage.propTypes = {
  children: PropTypes.node,
};

const StyledWrapperPage = styled.main`
  width: 100%;
  margin: 8em 0;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    width: 725px;
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    width: 990px;
  }

  @media (min-width: ${(p) => p.theme.screen.xlg}) {
    width: 1320px;
  }
`;

export default WrapperPage;
