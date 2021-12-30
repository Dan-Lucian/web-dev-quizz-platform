/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { ThemeProvider } from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import GlobalStyle from './Global.style';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Logo from './components/Logo';
import Footer from './components/Footer';
import Socials from './components/Socials';
import Links from './components/Links';
import Hamburger from './components/Hamburger';

const theme = {
  color: {
    bg: '#545E75',
    bgAccent: '#364057',
    hamburger: '#1b202b',
    text: '#fff',
    red: '#DA5C5C',
    green: '#21A179',
    bgBtnInternet: '#2DD4A0',
    textBtnInternet: '#fff',
    bgBtnHtml: '#F16529',
    textBtnHtml: '#fff',
    bgBtnCss: '#2965F1',
    textBtnCss: '#fff',
    bgBtnJavascript: '#F7DF1E',
    textBtnJavascript: '#000',
    bgBtnReact: '#61DAFB',
    textBtnReact: '#000',
  },
  screen: {
    med: '768px',
    lg: '1200px',
    xlg: '1800px',
  },
  isTouch: false,
};

// renders nav, outlet, footer
const App = () => {
  useEffect(() => {
    theme.isTouch =
      !!('ontouchstart' in window) || window.navigator.msMaxTouchPoints > 0;
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Nav>
          <Logo />
          <Links />
          <Hamburger />
        </Nav>

        <Outlet />

        <Footer>
          <address>
            <p>Author: </p>
            <Socials />
          </address>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
