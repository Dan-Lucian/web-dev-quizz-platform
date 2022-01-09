import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkInternal = ({ to, className, children }) => {
  const props = {
    to,
    className,
  };

  return <Link {...props}>{children}</Link>;
};

LinkInternal.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default LinkInternal;
