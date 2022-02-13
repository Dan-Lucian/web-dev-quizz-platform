// shared components
import Header from '../components/Header';
import Heading from '../components/Heading';

const PageNotFound = () => (
  <main>
    <Header style={{ paddingTop: '8em' }}>
      <Heading level={2}>No such page :(</Heading>
    </Header>
  </main>
);

export default PageNotFound;
