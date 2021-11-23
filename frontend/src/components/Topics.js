import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTopics = styled.section`
  padding: 30px 20px;
`;

const Topics = ({ children }) => <StyledTopics>{children}</StyledTopics>;

Topics.propTypes = {
  children: PropTypes.array,
};

export default Topics;
