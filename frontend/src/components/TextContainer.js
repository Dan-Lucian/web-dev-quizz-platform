import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextContainer = ({ children, style, color }) => {
  switch (color) {
    case 'red':
      return (
        <StyledTextContainerRed style={style}>
          {children}
        </StyledTextContainerRed>
      );

    case 'green':
      return (
        <StyledTextContainerGreen style={style}>
          {children}
        </StyledTextContainerGreen>
      );

    default:
      return (
        <StyledTextContainer style={style}>{children}</StyledTextContainer>
      );
  }
};

TextContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  color: PropTypes.string,
};

const StyledTextContainer = styled.div`
  width: 100%;
  padding: 2em 1.5em;
  margin: 0 auto;
  background-color: ${(p) => p.theme.color.bgAccent};

  @media (min-width: ${(p) => p.theme.screen.med}) {
    width: 725px;
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    width: 990px;
  }

  @media (min-width: ${(p) => p.theme.screen.xlg}) {
    width: 1320px;
  }
`;

const StyledTextContainerRed = styled(StyledTextContainer)`
  background-color: ${(p) => p.theme.color.red};
`;

const StyledTextContainerGreen = styled(StyledTextContainer)`
  background-color: ${(p) => p.theme.color.green};
`;

export default TextContainer;
