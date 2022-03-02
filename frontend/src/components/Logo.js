import styled from 'styled-components';
import { Link } from 'react-router-dom';

// assets
import LogoPath from '../img/Logo.png';

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledLinkInternal to="/">
      <StyledLogo
        onClick={scrollToTop}
        width="50px"
        height="50px"
        src={LogoPath}
        alt="logo"
      />
    </StyledLinkInternal>
  );
};

const StyledLinkInternal = styled(Link)`
  font-size: 0;

  &:hover {
    background-color: ${(p) => p.theme.color.text};
  }
`;

const StyledLogo = styled.img`
  cursor: pointer;

  @media (min-width: ${(p) => p.theme.screen.xlg}) {
    width: 60px;
    height: 60px;
  }
`;

export default Logo;
