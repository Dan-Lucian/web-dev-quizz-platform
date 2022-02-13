import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperApp = ({ children }) => (
  <StyledWrapperApp>{children}</StyledWrapperApp>
);

WrapperApp.propTypes = {
  children: PropTypes.node,
};

const StyledWrapperApp = styled.div`
  min-height: 100%;
  position: relative;

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

export default WrapperApp;
