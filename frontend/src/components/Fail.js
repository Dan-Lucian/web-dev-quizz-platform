import PropTypes from 'prop-types';
import Button from './Button';
import ExternalLink from './ExternalLink';
import { StyledFail } from './StyledFail';
import Text from './Text';

const Fail = ({ moreInfo, nextQuestion, hideFailWindow }) => {
  const handleClick = () => {
    hideFailWindow();
    nextQuestion();
  };

  return (
    <StyledFail>
      <Button text="Next question" onClick={handleClick} />
      <Text>Seems like you need to recheck this.</Text>
      <Text>
        Here’s a useful <ExternalLink type="red" text="link" href={moreInfo} />
      </Text>
    </StyledFail>
  );
};

Fail.propTypes = {
  moreInfo: PropTypes.string,
  nextQuestion: PropTypes.func,
  hideFailWindow: PropTypes.func,
};

export default Fail;
