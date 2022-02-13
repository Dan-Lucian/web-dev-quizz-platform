import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// shared components
import Heading from '../../components/Heading';
import HCenter from '../../components/HCenter';

// local components
import ButtonStart from './components/ButtonStart';
import Topics from './components/Topics';
import WrapperPage from './components/WrapperPage';
import StatusRequest from './components/StatusRequest';
import Header from './components/Header';

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
  const {
    data: receivedQuestions,
    status,
    run,
    error,
    setError,
  } = useAsync({ status: 'idle' });
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'resolved') {
      receivedQuestions.forEach((question) => {
        const shuffledAnswers = shuffleArray(question.answers);
        question.answers = shuffledAnswers;
      });

      navigate('/test', { state: receivedQuestions });
    }
  }, [navigate, receivedQuestions, setError, status]);

  const startTest = () => {
    if (selectedTopics.length === 0) return;
    run(questions.send(selectedTopics));
  };

  // returns button toggler func that either
  // deselects all secondary topics if main selected or
  // deselects main if any secondary selected
  const getTopicToggler = (topicName) => {
    const { main: mainTopic, secondary: secondaryTopics } =
      getTopicInfo(topicName);

    const isMain = topicName === mainTopic;

    if (isMain) {
      return () => {
        // deselects if topic already selected and quits
        if (selectedTopics.includes(topicName)) {
          setSelectedTopics((prev) =>
            prev.filter((topic) => topic !== topicName)
          );

          return;
        }

        setSelectedTopics((prev) =>
          prev.filter((t) => !secondaryTopics.includes(t)).concat(topicName)
        );
      };
    }

    return () => {
      // deselects if topic already selected and quits
      if (selectedTopics.includes(topicName)) {
        setSelectedTopics((prev) =>
          prev.filter((topic) => topic !== topicName)
        );

        return;
      }

      setSelectedTopics((prev) =>
        prev.filter((t) => t !== mainTopic).concat(topicName)
      );
    };
  };

  return (
    <WrapperPage>
      <HCenter>
        <Header>
          <Heading level={1} style={{ marginBottom: '50px' }}>
            Welcome there fellow believer
          </Heading>
          <ButtonStart onClick={startTest} text="Start the test" />
          <StatusRequest
            selectedTopics={selectedTopics}
            status={status}
            error={error}
            data={receivedQuestions}
          />
        </Header>

        <Heading
          level={2}
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
          getTopicToggler={getTopicToggler}
        />
      </HCenter>
    </WrapperPage>
  );
};

export default PageIndex;
