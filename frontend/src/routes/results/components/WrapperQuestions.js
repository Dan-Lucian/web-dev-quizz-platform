import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperQuestions = ({ children }) => (
  <StyledWrapperQuestions>{children}</StyledWrapperQuestions>
);

WrapperQuestions.propTypes = {
  children: PropTypes.node,
};

const StyledWrapperQuestions = styled.ol`
  padding-bottom: 2em;
  background-color: ${(p) => p.theme.color.bgAccent};
`;

export default WrapperQuestions;
