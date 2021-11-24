import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

export const StyledTopic = styled.section`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const Topic = ({ contents: { labels, colorText, colorBg } }) => (
  <StyledTopic>
    {labels.map((label, idx) => (
      <Button key={idx} text={label} colorText={colorText} colorBg={colorBg} />
    ))}
  </StyledTopic>
);

Topic.propTypes = {
  contents: PropTypes.array,
};

export default Topic;
