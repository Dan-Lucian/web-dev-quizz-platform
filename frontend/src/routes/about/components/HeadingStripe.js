import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeadingStripe = ({ color, children, style }) => {
  switch (color) {
    case 'red':
      return (
        <StyledHeadingStripeRed style={style}>
          {children}
        </StyledHeadingStripeRed>
      );

    case 'green':
      return (
        <StyledHeadingStripeGreen style={style}>
          {children}
        </StyledHeadingStripeGreen>
      );

    default:
      return (
        <StyledHeadingStripe style={style}>{children}</StyledHeadingStripe>
      );
  }
};

HeadingStripe.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  color: PropTypes.string,
};

const StyledHeadingStripe = styled.h2`
  width: 100%;
  font-size: 1.5em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeadingStripeRed = styled(StyledHeadingStripe)`
  background-color: ${(p) => p.theme.color.red};
`;

const StyledHeadingStripeGreen = styled(StyledHeadingStripe)`
  background-color: ${(p) => p.theme.color.green};
`;

export default HeadingStripe;
