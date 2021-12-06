// Idea from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section#using_a_section_without_a_heading

import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeadingFakeHidden = ({ children }) => (
  <StyledHeadingFakeHidden>{children}</StyledHeadingFakeHidden>
);

HeadingFakeHidden.propTypes = {
  children: PropTypes.node,
};

const StyledHeadingFakeHidden = styled.h3`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

export default HeadingFakeHidden;
