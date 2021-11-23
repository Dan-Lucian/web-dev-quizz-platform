import styled from 'styled-components';
import LogoPath from '../img/Logo.png';

const StyledLogo = styled.img`
  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;
  }
`;

const Logo = () => (
  <StyledLogo width="50px" height="50px" src={LogoPath} alt="logo" />
);

export default Logo;
