import PropTypes from 'prop-types';

// local components
import LinkExternal from './LinkExternal';
import Button from './Button';
import Text from './Text';

// styles
import { StyledPopupFail } from './PopupFail.styles';

const PopupFail = ({ moreInfo, moveOntoNextQuestion }) => (
  <StyledPopupFail open>
    <Button text="Next question" onClick={moveOntoNextQuestion} />
    <Text>Seems like you need to recheck this.</Text>
    <Text>
      Here you can find <LinkExternal text="more information" href={moreInfo} />
    </Text>
  </StyledPopupFail>
);

PopupFail.propTypes = {
  moreInfo: PropTypes.string,
  moveOntoNextQuestion: PropTypes.func,
};

export default PopupFail;
