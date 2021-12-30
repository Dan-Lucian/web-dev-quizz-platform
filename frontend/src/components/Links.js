import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Links = () => (
  <StyledLinks>
    <li>
      <Link to="/">_Home</Link>
    </li>
    <li>
      <Link to="/about">_About</Link>
    </li>
  </StyledLinks>
);

const StyledLinks = styled.ul`
  justify-content: flex-end;
  display: none;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    display: flex;
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

export default Links;
