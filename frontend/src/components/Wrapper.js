import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.screen.med}) {
    font-size: 20px;
  }
`;

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
