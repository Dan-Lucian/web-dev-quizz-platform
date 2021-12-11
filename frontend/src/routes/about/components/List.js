import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = ({ children }) => <StyledList>{children}</StyledList>;

List.propTypes = {
  children: PropTypes.node,
};

const StyledList = styled.ul`
  padding-left: 40px;
  list-style-type: disc;

  & > li {
    margin-bottom: 0.7em;
  }
`;

export default List;
