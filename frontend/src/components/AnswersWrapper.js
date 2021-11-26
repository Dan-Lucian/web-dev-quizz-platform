import styled from 'styled-components';
import PropTypes from 'prop-types';

const AnswersWrapper = ({ children }) => (
  <StyledAnswersWrapper>{children}</StyledAnswersWrapper>
);

AnswersWrapper.propTypes = {
  children: PropTypes.node,
};

export const StyledAnswersWrapper = styled.main`
  margin-bottom: 110px;
  display: grid;
  padding: 10px;
  display: grid;
  grid-template-columns: 320px;
  grid-template-rows: 60px 60px 60px 60px;
  grid-gap: 20px;
  justify-content: center;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    grid-template-columns: 630px;
    grid-template-rows: 60px 60px 60px 60px;
    margin-bottom: 190px;
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    grid-template-columns: 470px 470px;
    grid-template-rows: 80px 80px;
    margin-bottom: 200px;
  }

  @media (min-width: ${(p) => p.theme.screen.xlg}) {
    grid-template-columns: 550px 550px;
    grid-template-rows: 100px 100px;
  }
`;

export default AnswersWrapper;
