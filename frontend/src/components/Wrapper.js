import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => (
  <StyledWrapper aria-hidden="true">{children}</StyledWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.node,
};

const StyledWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.screen.med}) {
    font-size: 20px;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    font-size: 22px;
  }

  @media (min-width: ${(props) => props.theme.screen.xlg}) {
    font-size: 24px;
  }
`;

export default Wrapper;
