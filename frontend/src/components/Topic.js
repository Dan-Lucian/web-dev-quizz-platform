import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

export const StyledTopic = styled.section`
  padding: 10px;
  display: grid;
  grid-template-columns: 98px 98px 98px;
  grid-template-rows: 40px 40px;
  grid-gap: 20px;

  @media (min-width: ${(props) => props.theme.screen.med}) {
    grid-template-columns: 131px;
    grid-template-rows: repeat(6, 45px);
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-template-columns: 171px;
    grid-template-rows: repeat(6, 60px);
  }

  @media (min-width: ${(props) => props.theme.screen.xlg}) {
    grid-template-columns: 188px;
    grid-template-rows: repeat(6, 60px);
  }
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
