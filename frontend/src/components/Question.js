import styled from 'styled-components';
import PropTypes from 'prop-types';

const Question = ({ children }) => <StyledQuestion>{children}</StyledQuestion>;

Question.propTypes = {
  children: PropTypes.node,
};

const StyledQuestion = styled.h1`
  background: ${(p) => p.theme.color.bgAccent};
  display: flex;
  font-size: 1.5em;
  font-weight: 700;
  padding: 1.2em 0.7em;
  width: 100%;

  span {
    display: block;
    margin-right: 0.5em;
  }

  /* @media (min-width: ${(p) => p.theme.screen.lg}) {
    width: 70vw;
  }

  @media (min-width: ${(p) => p.theme.screen.med}) {
    width: 630px;
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    width: 960px;
  }

  @media (min-width: ${(p) => p.theme.screen.xlg}) {
    width: 1120px;
  } */
`;

export default Question;
