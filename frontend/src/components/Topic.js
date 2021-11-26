import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Topic = ({
  contents: { mainTopic, secondaryTopics },
  selectedTopics,
  toggleTopic,
  type,
}) => {
  const labels = [mainTopic, ...secondaryTopics];

  return (
    <StyledTopic>
      {labels.map((label, idx) => (
        <Button
          pressed={selectedTopics.includes(label.toLowerCase())}
          key={idx}
          text={label}
          type={type}
          onClick={toggleTopic}
        />
      ))}
    </StyledTopic>
  );
};

Topic.propTypes = {
  contents: PropTypes.object,
  selectedTopics: PropTypes.array,
  toggleTopic: PropTypes.func,
  type: PropTypes.string,
};

export const StyledTopic = styled.section`
  padding: 10px;
  display: grid;
  grid-template-columns: 98px 98px 98px;
  grid-template-rows: 40px 40px;
  grid-gap: 20px;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    grid-template-columns: 131px;
    grid-template-rows: repeat(6, 45px);
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    grid-template-columns: 171px;
    grid-template-rows: repeat(6, 60px);
  }

  @media (min-width: ${(p) => p.theme.screen.xlg}) {
    grid-template-columns: 188px;
    grid-template-rows: repeat(6, 60px);
  }
`;

export default Topic;
