import styled from 'styled-components';

const StyledPopupFail = styled.article`
  padding: 1em 3em;
  margin-top: 2em;
  background-color: ${(p) => p.theme.color.bgAccent};
  border: 3px solid ${(p) => p.theme.color.red};
  display: flex;
  flex-direction: column;
`;

export { StyledPopupFail };
// imported by Button.js and PopupFail.js
