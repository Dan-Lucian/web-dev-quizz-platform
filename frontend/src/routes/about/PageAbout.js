// shared components
import Heading from '../../components/Heading';
import HCenter from '../../components/HCenter';

// local components
import HeadingStripe from './components/HeadingStripe';
import WrapperPage from './components/WrapperPage';
import WrapperText from './components/WrapperText';
import Section from './components/Section';

const PageAbout = () => (
  <HCenter>
    <WrapperPage>
      <Heading level={1}>What is this all about ?</Heading>

      <Section>
        <HeadingStripe color="green">Idea</HeadingStripe>
        <WrapperText color="green">
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
        </WrapperText>
      </Section>
      <Section style={{ width: '100%', marginBottom: '6em' }}>
        <HeadingStripe color="red">Mechanics</HeadingStripe>
        <WrapperText color="red">
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
        </WrapperText>
      </Section>
    </WrapperPage>
  </HCenter>
);

export default PageAbout;
