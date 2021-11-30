import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// shared components
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import HCenter from '../../components/HCenter';

// local components
import ButtonStart from './components/ButtonStart';
import WrapperTopics from './components/WrapperTopics';
import WrapperPage from './components/WrapperPage';

// shared hooks
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { useAsync } from '../../hooks/useAsync';

// shared services
import questions from '../../services/questions';

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

const PageIndex = () => {
  const [selectedTopics, setSelectedTopics] = useLocalStorageState(
    'testTopics',
    []
  );
  const { data: receivedQuestions, status, run } = useAsync({ status: 'idle' });
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'resolved') {
      navigate('/test', { state: receivedQuestions });
    }
  }, [navigate, receivedQuestions, status]);

  const startTest = () => {
    run(questions.send(selectedTopics));
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
    <HCenter>
      <WrapperPage>
        <HCenter>
          <Header>
            <Heading level={1} style={{ marginBottom: '50px' }}>
              Welcome there fellow believer
            </Heading>
            {status === 'pending' && 'Loading'}
            <ButtonStart onClick={startTest} text="Start the test" />
          </Header>

          <Heading
            level={1}
            style={{
              marginBottom: '20px',
              width: '100%',
            }}
          >
            Choose your topics
          </Heading>

          <WrapperTopics
            dbTopics={dbTopics}
            selectedTopics={selectedTopics}
            toggleTopic={toggleTopic}
          />
        </HCenter>
      </WrapperPage>
    </HCenter>
  );
};

export default PageIndex;
