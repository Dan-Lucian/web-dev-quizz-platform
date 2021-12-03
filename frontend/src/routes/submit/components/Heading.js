import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>;

Heading.propTypes = {
  children: PropTypes.node,
};

const StyledHeading = styled.h1`
  background: ${(p) => p.theme.color.bgAccent};
  font-size: 1.5em;
  font-weight: 700;
  padding: 0.5em;
  width: 100%;
  margin-bottom: 0.5em;
  text-align: center;
  line-height: 1.4em;
`;

export default Heading;
