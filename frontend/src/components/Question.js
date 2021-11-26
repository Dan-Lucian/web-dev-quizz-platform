import styled from 'styled-components';
import PropTypes from 'prop-types';

const Question = ({ children }) => <StyledQuestion>{children}</StyledQuestion>;

Question.propTypes = {
  children: PropTypes.node,
};

const StyledQuestion = styled.h1`
  background: ${(p) => p.theme.color.bgAccent};
  text-align: center;
  display: block;
  font-size: 2em;
  font-weight: 700;
  padding: 20px 10px;
  max-width: 80vw;

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    max-width: 70vw;
  }
`;

export default Question;
