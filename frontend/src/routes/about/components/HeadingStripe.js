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
  outline: 5px solid ${(props) => props.theme.colorText};
  width: 100%;
  font-size: 1.75em;
  height: 2.4em;
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
