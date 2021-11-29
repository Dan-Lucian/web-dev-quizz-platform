// shared components
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Body from '../../components/Body';
import TextContainer from '../../components/TextContainer';

// local components
import HeadingStripe from './components/HeadingStripe';

const PageAbout = () => (
  <>
    <Header>
      <Heading level={1} style={{ marginBottom: '50px' }}>
        What is this all about ?
      </Heading>
    </Header>

    <Body>
      <section style={{ width: '100%', marginBottom: '6rem' }}>
        <HeadingStripe
          style={{
            marginBottom: '2rem',
          }}
          color="green"
        >
          Idea
        </HeadingStripe>
        <TextContainer>
          <p>
            We are living in the Google era and it is fairly easy to find stuff
            online, but you cannot search for what you don’t even remember.
          </p>
          <br />
          <br />
          <p>
            This is a platform that has access to a collection of questions
            about different web development related topics.
          </p>
          <br />
          <br />
          <p>
            The purpose of this is to keep the memory of developers fresh about
            certain topics that they might forget. The topics and the questions
            will be as “nitty-gritty” as possible.
          </p>
          <br />
          <br />
          <p>
            This is not intended for learning purposes, but for periodic
            refreshments of your memory.
          </p>
        </TextContainer>
      </section>
      <section style={{ width: '100%', marginBottom: '6em' }}>
        <HeadingStripe style={{ marginBottom: '2rem' }} color="red">
          Mechanics
        </HeadingStripe>
        <TextContainer>
          <p>
            The questions are chosen at random based on the selected topics then
            the chosen questions are presented in a form of a test.
          </p>
          <br />
          <br />
          <p>There are several major topics with their subtopics:</p>
          <br />
          <br />
          <ul style={{ paddingLeft: '40px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.7em' }}>
              In case you select a major topic (ex: javascript) the questions
              will be about the whole topic.
            </li>
            <li style={{ marginBottom: '0.7em' }}>
              In case you select a subtopic (ex: objects) the questions will be
              only about that subtopic.
            </li>
            <li style={{ marginBottom: '0.7em' }}>
              It is possible to mix subtopics from different major topics.
            </li>
            <li>It is possible to choose ALL topics or ALL subtopics.</li>
          </ul>
          <br />
          <br />
          <p>
            This is not intended for learning purposes, but for periodic
            refreshments of your memory.
          </p>
        </TextContainer>
      </section>
    </Body>
  </>
);

export default PageAbout;
