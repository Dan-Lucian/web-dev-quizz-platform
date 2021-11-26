import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const StyledHeading = styled.h1`
  background: ${(p) => p.theme.color.bgAccent};
  text-align: center;
  display: block;
  font-size: 1.5em;
  font-weight: 700;
  padding: 20px 10px;
`;

export default Heading;
