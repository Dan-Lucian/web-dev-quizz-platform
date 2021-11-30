import PropTypes from 'prop-types';

// local components
import LinkExternal from './LinkExternal';
import Button from './Button';
import Text from './Text';

// styles
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
        Here’s a useful <LinkExternal text="link" href={moreInfo} />
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
