import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperText = ({ children, style, color }) => {
  switch (color) {
    case 'red':
      return (
        <StyledWrapperTextRed style={style}>{children}</StyledWrapperTextRed>
      );

    case 'green':
      return (
        <StyledWrapperTextGreen style={style}>
          {children}
        </StyledWrapperTextGreen>
      );

    default:
      return <StyledWrapperText style={style}>{children}</StyledWrapperText>;
  }
};

WrapperText.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  color: PropTypes.string,
};

const StyledWrapperText = styled.div`
  width: 100%;
  padding: 2em 1.5em;
  margin: 0 auto;
  background-color: ${(p) => p.theme.color.bgAccent};
`;

const StyledWrapperTextRed = styled(StyledWrapperText)`
  border: 5px solid ${(p) => p.theme.color.red};
`;

const StyledWrapperTextGreen = styled(StyledWrapperText)`
  border: 5px solid ${(p) => p.theme.color.green};
`;

export default WrapperText;
