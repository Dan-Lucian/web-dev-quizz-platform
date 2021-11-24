import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 0;
`;

const Body = ({ children }) => <StyledBody>{children}</StyledBody>;

Body.propTypes = {
  children: PropTypes.array,
};

export default Body;
