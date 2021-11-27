import { useLocation } from 'react-router-dom';

const Results = () => {
  const { state: results } = useLocation();

  return <h1>Result page</h1>;
};

export default Results;
