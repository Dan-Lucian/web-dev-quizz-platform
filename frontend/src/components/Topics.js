import styled from 'styled-components';
import PropTypes from 'prop-types';
import Topic from './Topic';

const Topics = ({ dbTopics, selectedTopics, toggleTopic }) => (
  <StyledTopics>
    {dbTopics.map((topic, idx) => (
      <Topic
        key={idx}
        type={`${idx + 1}`}
        contents={topic}
        selectedTopics={selectedTopics}
        toggleTopic={toggleTopic}
      />
    ))}
  </StyledTopics>
);

Topics.propTypes = {
  dbTopics: PropTypes.array,
  selectedTopics: PropTypes.array,
  toggleTopic: PropTypes.func,
};

export const StyledTopics = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.screen.med}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export default Topics;
