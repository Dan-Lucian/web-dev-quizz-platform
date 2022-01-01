import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeadingStripe = ({ color, children }) => (
  <StyledHeadingStripe color={color}>{children}</StyledHeadingStripe>
);

HeadingStripe.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

const StyledHeadingStripe = styled.h2`
  width: 100%;
  font-size: 1.5em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.color[p.color]};
`;

export default HeadingStripe;
