import styled, { useTheme } from 'styled-components';

import PropTypes from 'prop-types';

// local components
import Topic from './Topic';

const Topics = ({ dbTopics, selectedTopics, toggleTopic }) => {
  const theme = useTheme();

  const getColor = (topicName) => {
    const capitalizedTopicName =
      topicName[0].toUpperCase() + topicName.slice(1).toLowerCase();

    return {
      bg: theme.color[`bgBtn${capitalizedTopicName}`],
      text: theme.color[`textBtn${capitalizedTopicName}`],
    };
  };

  return (
    <StyledTopics>
      {dbTopics.map((topic, idx) => (
        <Topic
          key={idx}
          color={getColor(topic.main)}
          contents={topic}
          selectedTopics={selectedTopics}
          toggleTopic={toggleTopic}
        />
      ))}
    </StyledTopics>
  );
};

Topics.propTypes = {
  dbTopics: PropTypes.array,
  selectedTopics: PropTypes.array,
  toggleTopic: PropTypes.func,
};

export const StyledTopics = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screen.med}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export default Topics;
