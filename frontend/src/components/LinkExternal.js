import PropTypes from 'prop-types';

// className given by styled-components library when extending
const LinkExternal = ({ children, href, className }) => {
  const props = {
    target: '_blank',
    rel: 'noopener noreferrer',
    href,
    className,
  };

  return <a {...props}>{children}</a>;
};

LinkExternal.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default LinkExternal;
