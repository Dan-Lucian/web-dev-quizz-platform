import styled from 'styled-components';

const Loader = () => (
  <StyledWrapper>
    <StyledLoader>Loading the page...</StyledLoader>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  padding-top: 8em;
  display: flex;
  justify-content: center;
`;

const StyledLoader = styled.main`
  color: ${(p) => p.theme.color.green};
  background-color: ${(p) => p.theme.color.bgAccent};
  font-size: 1.3em;
  padding: 0.5em 1em;
  animation-name: blink;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Loader;
