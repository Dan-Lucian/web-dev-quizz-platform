import Header from '../components/Header';
import AnswersWrapper from '../components/AnswersWrapper';
import Button from '../components/Button';
import Question from '../components/Question';

const questions = [
  {
    question:
      'What selector is used for targeting a direct child of an alement ?',
    correctAnswer: '>',
    wrongAnswers: ['+', 'empty space', '~'],
    learn: 'https://javascript.info',
  },
  {
    question:
      'What selector is used for targeting a direct child of an alement ?',
    correctAnswer: '>',
    wrongAnswers: ['+', 'empty space', '~'],
    learn: 'https://javascript.info',
  },
  {
    question:
      'What selector is used for targeting a direct child of an alement ?',
    correctAnswer: '>',
    wrongAnswers: ['+', 'empty space', '~'],
    learn: 'https://javascript.info',
  },
];

const Test = () => {
  const a = 20;

  return (
    <>
      <Header style={{ paddingTop: '150px' }}>
        <Question level={1}>{questions[0].question}</Question>
      </Header>

      <AnswersWrapper>
        <Button type="1" text={questions[0].correctAnswer} />
        <Button type="1" text={questions[0].wrongAnswers[0]} />
        <Button type="1" text={questions[0].wrongAnswers[1]} />
        <Button type="1" text={questions[0].wrongAnswers[2]} />
      </AnswersWrapper>
    </>
  );
};

export default Test;
