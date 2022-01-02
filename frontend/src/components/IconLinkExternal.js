// Technique source
// https://www.pinkdroids.com/blog/svg-react-styled-components/

import styled from 'styled-components';
import PropTypes from 'prop-types';

// shared components
import IconSvg from './IconSvg';

// viewbox sizes have to be equal to the original svg
// fill="currentColor" takes color from font color which changes on hover
// className is here because if you want to resize the component you will:
// style(IconLinkExternal)`...styles` and the className given by the styled-comp
// will be redirected to the initial Svg component which actually changes stuff
const IconLinkExternal = ({ className }) => (
  <Svg viewBox="0 0 14 14" className={className}>
    <path
      fill="currentColor"
      d="M 9 2.5 L 9 3.5 L 11.78125 3.5 L 5.640625 9.640625 L 6.359375 10.359375 L 12.5 4.21875 L 12.5 7 L 13.5 7 L 13.5 2.5 Z M 2.5 4.5 L 2.5 13.5 L 11.5 13.5 L 11.5 7 L 10.5 8 L 10.5 12.5 L 3.5 12.5 L 3.5 5.5 L 8 5.5 L 9 4.5 Z M 2.5 4.5"
    />
  </Svg>
);

// this component changes svg size
// the className will be redirected here
const Svg = styled(IconSvg)`
  width: 1em;
  height: 1em;
  margin-left: 0.2em;
  vertical-align: bottom;
  transform: translateY(-2px);
`;

IconLinkExternal.propTypes = {
  className: PropTypes.string,
};

export default IconLinkExternal;
