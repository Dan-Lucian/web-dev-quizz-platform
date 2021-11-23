import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.h1`
  background: ${(props) => props.theme.colorBgAccent};
  display: inline-block;
  font-size: 2em;
  font-weight: 700;
  padding: 20px 10px;
`;

const Heading = ({ level, style, children }) => {
  const tag = `h${level}`;

  return (
    <StyledHeading style={style} as={tag}>
      {children}
    </StyledHeading>
  );
};
Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
  style: PropTypes.object,
};

export default Heading;
