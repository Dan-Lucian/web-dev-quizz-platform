import styled from 'styled-components';
import PropTypes from 'prop-types';

const HCenter = ({ children }) => <StyledHCenter>{children}</StyledHCenter>;

HCenter.propTypes = {
  children: PropTypes.node,
};

const StyledHCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HCenter;
