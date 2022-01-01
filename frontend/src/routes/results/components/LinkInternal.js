import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkInternal = ({ to, children }) => (
  <StyledLinkInternal>
    <Link to={to}>{children}</Link>
  </StyledLinkInternal>
);

LinkInternal.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

const StyledLinkInternal = styled.div`
  display: flex;
  margin: 2em auto;
  justify-content: flex-end;

  a {
    margin-left: 60px;
    padding: 1em 2em;
    background-color: ${(p) => p.theme.color.bgAccent};
  }

  a:link,
  a:visited {
    color: ${(p) => p.theme.color.text};
    text-decoration: none;
  }

  a:hover {
    color: ${(p) => p.theme.color.bgAccent};
    background-color: ${(p) => p.theme.color.text};
  }
`;

export default LinkInternal;
