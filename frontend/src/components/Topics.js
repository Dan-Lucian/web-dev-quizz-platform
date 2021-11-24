import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTopics = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 0;
`;

const Topics = ({ children }) => <StyledTopics>{children}</StyledTopics>;

Topics.propTypes = {
  children: PropTypes.array,
};

export default Topics;
