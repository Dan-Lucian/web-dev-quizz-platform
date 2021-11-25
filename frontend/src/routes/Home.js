import Header from '../components/Header';
import Heading from '../components/Heading';
import ButtonStart from '../components/ButtonStart';
import Body from '../components/Body';
import Topics from '../components/Topics';

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

const Home = () => (
  <>
    {' '}
    <Header>
      <Heading level={1} style={{ marginBottom: '50px', fontSize: '2em' }}>
        Welcome there fellow believer
      </Heading>
      <ButtonStart text="Start the test" />
    </Header>
    <Body>
      <Heading level={1} style={{ marginBottom: '20px', width: '100%' }}>
        Choose your topics
      </Heading>
      <Topics topics={topics} />
    </Body>
  </>
);

export default Home;
