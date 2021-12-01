import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// shared components
import Heading from '../../components/Heading';
import HCenter from '../../components/HCenter';

// local components
import ButtonStart from './components/ButtonStart';
import WrapperTopics from './components/WrapperTopics';
import WrapperPage from './components/WrapperPage';
import StatusRequest from './components/StatusRequest';
import Header from './components/Header';
import StatusUnselected from './components/StatusUnselected';

// shared hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useAsync } from '../../hooks/useAsync';

// shared services
import questions from '../../services/questions';

// shared utils
import { shuffleArray } from '../../utils/shuffleArray';

// local utils
import { dbTopics, getTopicInfo } from './utils/dbTopics';

const PageIndex = () => {
  const [selectedTopics, setSelectedTopics] = useLocalStorage('testTopics', []);
  const { data: receivedQuestions, status, run } = useAsync({ status: 'idle' });
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'resolved') {
      receivedQuestions.forEach((question) => {
        const shuffledAnswers = shuffleArray(question.answers);
        question.answers = shuffledAnswers;
      });
      navigate('/test', { state: receivedQuestions });
    }
  }, [navigate, receivedQuestions, status]);

  const startTest = () => {
    if (selectedTopics.length === 0) return;
    run(questions.send(selectedTopics));
  };

  const toggleTopic = (e) => {
    // for mobile devices
    // on mobile the focused state cannot be difed from pressed
    e.target.blur();

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
            <ButtonStart onClick={startTest} text="Start the test" />
            <StatusRequest status={status} />
            {selectedTopics.length === 0 && <StatusUnselected />}
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
