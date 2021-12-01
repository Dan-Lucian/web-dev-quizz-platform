/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { ThemeProvider } from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

import GlobalStyle from './Global.style';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Logo from './components/Logo';
import Footer from './components/Footer';
import Socials from './components/Socials';
import Links from './components/Links';
import Hamburger from './components/Hamburger';

// shared hooks
import { useScrollDirection } from './hooks/useScrollDirection';
import { useToggle } from './hooks/useToggle';

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
  isTouch: false,
};

// renders nav, oulet, footer
const App = () => {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);
  const scrollDirection = useScrollDirection('up');

  theme.isTouch =
    !!('ontouchstart' in window) || window.navigator.msMaxTouchPoints > 0;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Nav hidden={scrollDirection === 'down'}>
          <Logo />
          <Links>
            <Link to="/">_Home</Link>
            <Link to="/about">_About</Link>
          </Links>
          <Hamburger isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen}>
            <Link onClick={toggleMenuOpen} to="/">
              Home
            </Link>
            <Link onClick={toggleMenuOpen} to="/about">
              About
            </Link>
          </Hamburger>
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
