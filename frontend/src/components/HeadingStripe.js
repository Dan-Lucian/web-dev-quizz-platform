import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeadingStripe = styled.h2`
  outline: 5px solid ${(props) => props.theme.colorText};
  width: 100%;
  font-size: 2em;
  height: 2.4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadingStripe = ({ children, style }) => (
  <StyledHeadingStripe style={style}>{children}</StyledHeadingStripe>
);

HeadingStripe.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default HeadingStripe;
