const dbTopics = [
  {
    mainTopic: 'Internet',
    secondaryTopics: ['HTTP', 'Websites', 'Security'],
    colorText: '#fff',
    colorBg: '#2DD4A0',
  },
  {
    mainTopic: 'HTML',
    secondaryTopics: [
      'Tags',
      'Forms',
      'Attributes',
      'General',
      'Accessibility',
    ],
    colorText: '#fff',
    colorBg: '#F16529',
  },
  {
    mainTopic: 'CSS',
    secondaryTopics: ['Selectors', 'Units', 'Layout'],
    colorText: '#fff',
    colorBg: '#2965F1',
  },
  {
    mainTopic: 'JavaScript',
    secondaryTopics: ['Internals', 'Objects', 'Functions', 'Web data', 'DOM'],
    colorText: '#282C34',
    colorBg: '#F7DF1E',
  },
  {
    mainTopic: 'React',
    secondaryTopics: ['Concepts', 'Hooks', 'Classes', 'CRA'],
    colorText: '#282C34',
    colorBg: '#61DAFB',
  },
];

const getTopicInfo = (topic) =>
  dbTopics.find(
    (t) =>
      t.mainTopic.toLowerCase() === topic ||
      t.secondaryTopics.map((st) => st.toLowerCase()).includes(topic)
  );

export { dbTopics, getTopicInfo };
