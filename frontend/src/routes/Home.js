import { useState } from 'react';
import Header from '../components/Header';
import Heading from '../components/Heading';
import ButtonStart from '../components/ButtonStart';
import Body from '../components/Body';
import Topics from '../components/Topics';

const dbTopics = [
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

const Home = () => {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleTopic = (e) => {
    const toggledTopic = e.target.textContent.toLowerCase();

    if (selectedTopics.includes(toggledTopic)) {
      setSelectedTopics((prev) =>
        prev.filter((topic) => topic !== toggledTopic)
      );
    } else {
      setSelectedTopics((prev) => [...prev, toggledTopic]);
    }
  };

  return (
    <>
      <Header>
        <Heading level={1} style={{ marginBottom: '50px' }}>
          Welcome there fellow believer
        </Heading>
        <ButtonStart text="Start the test" />
      </Header>

      <Body
        style={{
          paddingTop: '130px',
          paddingBottom: '130px',
        }}
      >
        <Heading
          level={1}
          style={{
            marginBottom: '20px',
            width: '100%',
          }}
        >
          Choose your topics
        </Heading>
        <Topics
          dbTopics={dbTopics}
          selectedTopics={selectedTopics}
          toggleTopic={toggleTopic}
        />
      </Body>
    </>
  );
};

export default Home;
