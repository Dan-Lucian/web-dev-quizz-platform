import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTextContainer = styled.div`
  width: 100%;
  padding: 2em 1.5em;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.screen.med}) {
    width: 725px;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    width: 990px;
  }

  @media (min-width: ${(props) => props.theme.screen.xlg}) {
    width: 1320px;
  }
`;

const TextContainer = ({ children, style }) => (
  <StyledTextContainer style={style}>{children}</StyledTextContainer>
);

TextContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default TextContainer;
