import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperAnswers = ({ children }) => (
  <StyledWrapperAnswers>{children}</StyledWrapperAnswers>
);

WrapperAnswers.propTypes = {
  children: PropTypes.node,
};

export const StyledWrapperAnswers = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 60px 60px 60px;
  grid-gap: 20px;
  justify-content: center;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    grid-template-rows: 60px 60px 60px 60px;
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 80px 80px;
  }

  @media (min-width: ${(p) => p.theme.screen.xlg}) {
    grid-template-rows: 100px 100px;
  }
`;

export default WrapperAnswers;
