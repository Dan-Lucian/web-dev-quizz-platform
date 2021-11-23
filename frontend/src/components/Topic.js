import PropTypes from 'prop-types';
import Button from './Button';

const Topic = ({ contents: { labels, colorText, colorBg } }) => (
  <>
    {labels.map((label, idx) => (
      <Button key={idx} text={label} colorText={colorText} colorBg={colorBg} />
    ))}
  </>
);

Topic.propTypes = {
  contents: PropTypes.array,
};

export default Topic;
