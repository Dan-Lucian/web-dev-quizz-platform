import styled from 'styled-components';

const StatusUnselected = () => (
  <StyledStatusUnselected>No topic selected</StyledStatusUnselected>
);

const StyledStatusUnselected = styled.p`
  position: absolute;
  bottom: -3em;
  background-color: ${(p) => p.theme.color.bgAccent};
  padding: 0.5em 1em;
  background-color: ${(p) => p.theme.color.bgAccent};
  color: ${(p) => p.theme.color.red};
`;

export default StatusUnselected;
