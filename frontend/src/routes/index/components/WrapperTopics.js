import styled from 'styled-components';
import PropTypes from 'prop-types';

// local components
import Topic from './Topic';

const WrapperTopics = ({ dbTopics, selectedTopics, toggleTopic }) => (
  <StyledTopics aria-hidden="true">
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

WrapperTopics.propTypes = {
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

export default WrapperTopics;
