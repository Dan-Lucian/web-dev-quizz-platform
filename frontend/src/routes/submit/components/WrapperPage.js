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
  margin: 5em 0;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    width: 725px;
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    width: 990px;
  }

  @media (min-width: ${(p) => p.theme.screen.xlg}) {
    width: 1320px;
  }

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      font-size: 1em;
      margin-bottom: 1em;
    }
  }
`;

export default WrapperPage;
