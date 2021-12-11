const dbTopics = [
  {
    main: 'Internet',
    secondary: ['Websites', 'HTTP', 'Security'],
    colorText: '#fff',
    colorBg: '#2DD4A0',
  },
  {
    main: 'HTML',
    secondary: ['General', 'Tags', 'Attributes', 'Forms', 'Accessibility'],
  },
  {
    main: 'CSS',
    secondary: ['Selectors', 'Properties', 'Values', 'Layout'],
  },
  {
    main: 'JavaScript',
    secondary: ['Internals', 'Objects', 'Functions', 'DOM', 'Web data'],
  },
  {
    main: 'React',
    secondary: ['Concepts', 'Classes', 'Hooks', 'CRA'],
  },
];

const getTopicInfo = (topic) =>
  dbTopics.find(
    (t) =>
      t.main.toLowerCase() === topic ||
      t.secondary.map((st) => st.toLowerCase()).includes(topic)
  );

export { dbTopics, getTopicInfo };
