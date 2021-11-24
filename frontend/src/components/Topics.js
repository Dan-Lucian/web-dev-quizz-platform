import styled from 'styled-components';
import PropTypes from 'prop-types';
import Topic from './Topic';

export const StyledTopics = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.screen.med}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Topics = ({ topics }) => (
  <StyledTopics>
    {topics.map((topic, idx) => (
      <Topic key={idx} contents={topic} />
    ))}
  </StyledTopics>
);

Topics.propTypes = {
  topics: PropTypes.array,
};

export default Topics;
