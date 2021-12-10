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
            about various web development related topics. For now this platform
            has questions about internet, html, css, javascript and react.
          </p>
          <br />
          <br />
          <p>
            The purpose of this platform is to remind developers about certain
            bits of information that they might forget. If during the tests you
            find yourself thinking - "Oh right, that's an actual thing.", then
            the planned purpose has been achieved!
          </p>
          <br />
          <br />
          <p>
            This is not intended for learning purposes, but for periodic
            reminders.
          </p>
        </WrapperText>
      </Section>
      <Section style={{ width: '100%', marginBottom: '6em' }}>
        <HeadingStripe color="red">Mechanics</HeadingStripe>
        <WrapperText color="red">
          <p>
            10 questions will be chosen at random based on the selected topics,
            then the chosen questions will be presented in a form of a test.
          </p>
          <br />
          <br />
          <p>Instructions:</p>
          <br />
          <br />
          <ul style={{ paddingLeft: '40px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.7em' }}>
              Each topic has a main topic (ex: javascript) and some respective
              subtopics (ex: functions).
            </li>
            <li style={{ marginBottom: '0.7em' }}>
              In case you select a main topic (ex: javascript) the questions
              will be about the whole topic.
            </li>
            <li style={{ marginBottom: '0.7em' }}>
              In case you select a subtopic (ex: objects) the questions will be
              only about that subtopic.
            </li>
            <li style={{ marginBottom: '0.7em' }}>
              But it is not possible to choose a main topic and a subtopic at
              the same time.
            </li>
            <li style={{ marginBottom: '0.7em' }}>
              It is possible to mix subtopics from different main topics.
            </li>
            <li>It is possible to choose ALL main topics or ALL subtopics.</li>
          </ul>
          <br />
          <br />
          <p>
            Notice: This is not intended for learning purposes, but for periodic
            refreshments of your memory.
          </p>
          <br />
          <br />
          <p style={{ textAlign: 'center' }}>gl hf</p>
        </WrapperText>
      </Section>
    </WrapperPage>
  </HCenter>
);

export default PageAbout;
