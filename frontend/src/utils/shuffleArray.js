const shuffleArray = (array) => {
  if (!array) return;

  const copy = array.slice(0);

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy.slice(0);
};

export { shuffleArray };
