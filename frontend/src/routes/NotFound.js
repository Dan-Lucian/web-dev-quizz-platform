import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Heading from '../components/Heading';

const NotFound = ({ children }) => (
  <StyledNotFound>
    <Header>
      <Heading>No such page</Heading>
    </Header>
  </StyledNotFound>
);

NotFound.propTypes = {
  children: PropTypes.node,
};

// exported to Footer.js
export const StyledNotFound = styled.main``;

export default NotFound;
