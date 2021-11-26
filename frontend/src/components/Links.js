import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  display: none;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    display: block;
  }

  a {
    margin-left: 60px;
    padding: 2px;
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

const Links = ({ children }) => <StyledLinks>{children}</StyledLinks>;

Links.propTypes = {
  children: PropTypes.node,
};

export default Links;
