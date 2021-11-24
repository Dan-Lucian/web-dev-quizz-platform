/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Global.style';
import Nav from './components/Nav';
import Logo from './components/Logo';
import Hamburger from './components/Hamburger';
import Header from './components/Header';
import Heading from './components/Heading';
import ButtonStart from './components/ButtonStart';
import Topics from './components/Topics';
import Topic from './components/Topic';
import Footer from './components/Footer';
import Socials from './components/Socials';

const theme = {
  colorBg: '#545E75',
  colorBgAccent: '#364057',
  colorHamburger: '#1b202b',
  colorText: '#fff',
};

const topics = [
  {
    labels: ['HTTP', 'Internet', 'Websites', 'Security'],
    colorText: '#fff',
    colorBg: '#2DD4A0',
  },
  {
    labels: ['HTML', 'Semantics', 'Forms', 'Text'],
    colorText: '#fff',
    colorBg: '#F16529',
  },
  {
    labels: ['CSS', 'Selectors', 'Units', 'Layout'],
    colorText: '#fff',
    colorBg: '#2965F1',
  },
  {
    labels: ['JavaScript', 'Theory', 'Objects', 'Functions', 'Web data', 'DOM'],
    colorText: '#282C34',
    colorBg: '#F7DF1E',
  },
  {
    labels: ['React', 'Concepts', 'Hooks', 'Classes', 'CRA'],
    colorText: '#282C34',
    colorBg: '#61DAFB',
  },
];

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Nav>
      <Logo />
      <Hamburger />
    </Nav>

    <Header>
      <Heading level={1} style={{ marginBottom: '30px' }}>
        Welcome there fellow believer
      </Heading>
      <ButtonStart text="Start the test" />
    </Header>

    <Topics>
      <Heading level={1} style={{ marginBottom: '20px' }}>
        Choose your topics
      </Heading>
      {topics.map((topic, idx) => (
        <Topic key={idx} contents={topic} />
      ))}
    </Topics>

    <Footer>
      <p>Author: </p>
      <Socials />
    </Footer>
  </ThemeProvider>
);

export default App;
