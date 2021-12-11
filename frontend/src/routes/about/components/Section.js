import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = ({ children }) => <StyledSection>{children}</StyledSection>;

Section.propTypes = {
  children: PropTypes.node,
};

const StyledSection = styled.section`
  margin-top: 4em;

  &:last-child {
    margin-bottom: '6em';
  }
`;

export default Section;
