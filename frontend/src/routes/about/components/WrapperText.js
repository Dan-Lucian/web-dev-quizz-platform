import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperText = ({ children, colorBorder = 'black' }) => (
  <StyledWrapperText colorBorder={colorBorder}>{children}</StyledWrapperText>
);

WrapperText.propTypes = {
  children: PropTypes.node,
  colorBorder: PropTypes.string,
};

const StyledWrapperText = styled.div`
  width: 100%;
  padding: 2em 1.5em;
  margin: 0 auto;
  background-color: ${(p) => p.theme.color.bgAccent};
  border: 5px solid ${(p) => p.theme.color[p.colorBorder]};
`;

export default WrapperText;
