import styled from 'styled-components';
import Header from '../components/Header';
import Heading from '../components/Heading';

const NotFound = () => (
  <StyledNotFound>
    <Header>
      <Heading>No such page</Heading>
    </Header>
  </StyledNotFound>
);

// exported to Footer.js to position footer absolute and at window bottom
export const StyledNotFound = styled.main``;

export default NotFound;
