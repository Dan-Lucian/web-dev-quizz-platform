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
import Links from './components/Links';
import HamburgerMenu from './components/HamburgerMenu';

const theme = {
  color: {
    bg: '#545E75',
    bgAccent: '#364057',
    hamburger: '#1b202b',
    text: '#fff',
    red: '#DA5C5C',
    green: '#21A179',
    bgBtn1: '#2DD4A0',
    textBtn1: '#fff',
    bgBtn2: '#F16529',
    textBtn2: '#fff',
    bgBtn3: '#2965F1',
    textBtn3: '#fff',
    bgBtn4: '#F7DF1E',
    textBtn4: '#000',
    bgBtn5: '#61DAFB',
    textBtn5: '#000',
  },

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
          <Links>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/test">Test</NavLink>
          </Links>
          <Hamburger isMenuOpen={isMenuOpen} onClick={toggleMenuOpen} />
          <HamburgerMenu isMenuOpen={isMenuOpen}>
            <NavLink onClick={toggleMenuOpen} to="/">
              Home
            </NavLink>
            <NavLink onClick={toggleMenuOpen} to="/about">
              About
            </NavLink>
          </HamburgerMenu>
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
