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
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1.3em;
  line-height: 1.4em;

  span {
    display: block;
    margin-right: 0.5em;
  }
`;

export default Question;
