import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBody = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
`;

const Body = ({ children, style }) => (
  <StyledBody style={style}>{children}</StyledBody>
);

Body.propTypes = {
  children: PropTypes.array,
  style: PropTypes.object,
};

export default Body;
