import Header from '../components/Header';
import Heading from '../components/Heading';
import ButtonStart from '../components/ButtonStart';
import Body from '../components/Body';
import Topics from '../components/Topics';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import questions from '../services/questions';

const dbTopics = [
  {
    mainTopic: 'Internet',
    secondaryTopics: ['HTTP', 'Websites', 'Security'],
    colorText: '#fff',
    colorBg: '#2DD4A0',
  },
  {
    mainTopic: 'HTML',
    secondaryTopics: ['Semantics', 'Forms', 'Text'],
    colorText: '#fff',
    colorBg: '#F16529',
  },
  {
    mainTopic: 'CSS',
    secondaryTopics: ['Selectors', 'Units', 'Layout'],
    colorText: '#fff',
    colorBg: '#2965F1',
  },
  {
    mainTopic: 'JavaScript',
    secondaryTopics: ['Internals', 'Objects', 'Functions', 'Web data', 'DOM'],
    colorText: '#282C34',
    colorBg: '#F7DF1E',
  },
  {
    mainTopic: 'React',
    secondaryTopics: ['Concepts', 'Hooks', 'Classes', 'CRA'],
    colorText: '#282C34',
    colorBg: '#61DAFB',
  },
];

const getTopicInfo = (topic) =>
  dbTopics.find(
    (t) =>
      t.mainTopic.toLowerCase() === topic ||
      t.secondaryTopics.map((st) => st.toLowerCase()).includes(topic)
  );

const Home = () => {
  const [selectedTopics, setSelectedTopics] = useLocalStorageState(
    'testTopics',
    []
  );

  const say = () => {
    console.log('post request sent');
    questions
      .send(selectedTopics)
      .then((res) => console.log('response', res))
      .catch((err) => console.log('reqest failed', err));
  };

  const toggleTopic = (e) => {
    const toggledTopic = e.target.textContent.toLowerCase();

    if (selectedTopics.includes(toggledTopic)) {
      setSelectedTopics((prev) =>
        prev.filter((topic) => topic !== toggledTopic)
      );

      return;
    }

    const topicInfo = getTopicInfo(toggledTopic);

    if (topicInfo.mainTopic.toLowerCase() === toggledTopic) {
      setSelectedTopics((prev) =>
        prev
          .filter(
            (t) =>
              !topicInfo.secondaryTopics
                .map((st) => st.toLowerCase())
                .includes(t)
          )
          .concat(toggledTopic)
      );
    } else {
      setSelectedTopics((prev) =>
        prev
          .filter((t) => t !== topicInfo.mainTopic.toLowerCase())
          .concat(toggledTopic)
      );
    }
  };

  return (
    <>
      <Header>
        <Heading level={1} style={{ marginBottom: '50px' }}>
          Welcome there fellow believer
        </Heading>
        <ButtonStart onClick={say} text="Start the test" />
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
