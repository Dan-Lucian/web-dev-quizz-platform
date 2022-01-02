import styled from 'styled-components';
import LogoPath from '../img/Logo.png';

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledLogo
      onClick={scrollToTop}
      width="50px"
      height="50px"
      src={LogoPath}
      alt="logo"
    />
  );
};

const StyledLogo = styled.img`
  cursor: pointer;

  @media (min-width: ${(p) => p.theme.screen.xlg}) {
    width: 60px;
    height: 60px;
  }
`;

export default Logo;
