import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Fail = ({ children, moreInfo, nextQuestion, hideFailWindow }) => {
  const handleClick = () => {
    hideFailWindow();
    nextQuestion();
  };

  return (
    <StyledFail>
      More info at {moreInfo}
      <Button text="Next question" type="1" onClick={handleClick} />
    </StyledFail>
  );
};

Fail.propTypes = {
  children: PropTypes.node,
  moreInfo: PropTypes.string,
  nextQuestion: PropTypes.func,
  hideFailWindow: PropTypes.func,
};

const StyledFail = styled.article`
  height: 50vh;
  background-color: ${(p) => p.theme.color.bgAccent};
  position: fixed;
  top: 20%;
  right: 20%;
  left: 20%;
`;

export default Fail;
