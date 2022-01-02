import styled from 'styled-components';

// generic svg component for extending to not rewrite attrs each time
const IconSvg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

export default IconSvg;
