import PropTypes from 'prop-types';
import styled from 'styled-components';

// shared components
import Button from '../../../components/Button';
import HeadingFakeHidden from '../../../components/HeadingFakeHidden';

const Topic = ({
  contents: { main, secondary },
  selectedTopics,
  toggleTopic,
  color,
}) => {
  const labels = [main, ...secondary];

  return (
    <StyledTopic>
      <HeadingFakeHidden>Topics related to {main}</HeadingFakeHidden>
      {labels.map((label, idx) => (
        <Button
          pressed={selectedTopics.includes(label.toLowerCase())}
          key={idx}
          text={label}
          color={color}
          onClick={toggleTopic}
        />
      ))}
    </StyledTopic>
  );
};
// the HeadingFakeHidden will not be shown
// it is only there because a section ought to have a heading
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section#using_a_section_without_a_heading

Topic.propTypes = {
  contents: PropTypes.object,
  selectedTopics: PropTypes.array,
  toggleTopic: PropTypes.func,
  color: PropTypes.object,
};

export const StyledTopic = styled.section`
  padding: 10px;
  display: grid;
  grid-template-columns: 98px 98px 98px;
  grid-template-rows: 40px 40px;
  grid-gap: 20px;
  flex-grow: 1;

  @media (min-width: ${(p) => p.theme.screen.med}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 45px);
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 60px);
  }

  @media (min-width: ${(p) => p.theme.screen.xlg}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 60px);
  }
`;

export default Topic;
