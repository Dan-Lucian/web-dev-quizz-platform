import { useLocation } from 'react-router-dom';

const Results = () => {
  const { state: results } = useLocation();
  console.log(results);

  return <h1>Results are in console</h1>;
};

export default Results;
