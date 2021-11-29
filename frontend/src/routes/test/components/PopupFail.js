import PropTypes from 'prop-types';

// shared components
import Button from '../../../components/Button';
import ExternalLink from '../../../components/ExternalLink';
import Text from '../../../components/Text';

// local components
import { StyledPopupFail } from './PopupFail.styles';

const PopupFail = ({ moreInfo, nextQuestion, hideFailWindow }) => {
  const handleClick = () => {
    hideFailWindow();
    nextQuestion();
  };

  return (
    <StyledPopupFail>
      <Button text="Next question" onClick={handleClick} />
      <Text>Seems like you need to recheck this.</Text>
      <Text>
        Here’s a useful <ExternalLink type="red" text="link" href={moreInfo} />
      </Text>
    </StyledPopupFail>
  );
};

PopupFail.propTypes = {
  moreInfo: PropTypes.string,
  nextQuestion: PropTypes.func,
  hideFailWindow: PropTypes.func,
};

export default PopupFail;
