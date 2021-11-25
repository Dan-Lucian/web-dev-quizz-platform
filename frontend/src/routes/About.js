import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Body from '../components/Body';
import HeadingStripe from '../components/HeadingStripe';
import TextContainer from '../components/TextContainer';

const About = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Header>
        <Heading level={1} style={{ marginBottom: '50px', fontSize: '2em' }}>
          What is this all about ?
        </Heading>
      </Header>

      <Body>
        <section style={{ width: '100%' }}>
          <HeadingStripe
            style={{
              backgroundColor: theme.colorGreen,
              marginBottom: '2rem',
            }}
          >
            Idea
          </HeadingStripe>
          <TextContainer
            style={{ backgroundColor: theme.colorGreen, marginBottom: '2rem' }}
          >
            <p>
              This is a platform that has access to a collection of questions
              about different web development related topics.
            </p>
            <br />
            <br />
            <p>
              The purpose of this is to refresh the memory of developers about
              certain topics that they might forget. The topics and the
              questions will be as “nitty-gritty” as possible.
            </p>
            <br />
            <br />
            <p>
              We are living in the Google era, it is easy to find stuff online,
              but you cannot search for what you don’t even remember.
            </p>
            <br />
            <br />
            <p>
              This is not intended for learning purposes, but for periodic
              refreshments of your memory.
            </p>
          </TextContainer>
        </section>
        <section style={{ width: '100%' }}>
          <HeadingStripe
            style={{ backgroundColor: theme.colorRed, marginBottom: '2rem' }}
          >
            Mechanics
          </HeadingStripe>
          <TextContainer
            style={{ backgroundColor: theme.colorRed, marginBottom: '2rem' }}
          >
            <p>
              The questions are chosen at random based on the selected topics
              then the chosen questions are presented in a form of a test.
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
                In case you select a subtopic (ex: objects) the questions will
                be only about that subtopic.
              </li>
              <li style={{ marginBottom: '0.7em' }}>
                It is possible to mix subtopics from different major topics.
              </li>
              <li>It is possible to choose ALL topics and subtopics.</li>
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
};

export default About;
