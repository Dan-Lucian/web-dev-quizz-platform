import styled from 'styled-components';
import PropTypes from 'prop-types';

const Error = ({ text }) => <StyledError>{text}</StyledError>;

Error.propTypes = {
  text: PropTypes.string,
};

const StyledError = styled.p`
  position: absolute;
  bottom: -3em;
  background-color: ${(p) => p.theme.color.bgAccent};
  padding: 0.5em 1em;
  background-color: ${(p) => p.theme.color.bgAccent};
  color: ${(p) => p.theme.color.red};
`;

export default Error;
