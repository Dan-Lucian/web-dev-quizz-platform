/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import GlobalStyle from './Global.style';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Logo from './components/Logo';
import Hamburger from './components/Hamburger';
import Footer from './components/Footer';
import Socials from './components/Socials';

const theme = {
  colorBg: '#545E75',
  colorBgAccent: '#364057',
  colorHamburger: '#1b202b',
  colorText: '#fff',
  colorRed: '#DA5C5C',
  colorGreen: '#21A179',

  screen: {
    med: '768px',
    lg: '1200px',
    xlg: '1800px',
  },
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Nav>
          <Logo />
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Hamburger isMenuOpen={isMenuOpen} onClick={toggleMenuOpen} />
        </Nav>

        <Outlet />

        <Footer>
          <p>Author: </p>
          <Socials />
        </Footer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
