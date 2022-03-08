import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatusRequest = ({ status, error, selectedTopics }) => {
  const props = {
    htmlFor: 'button-start',
  };

  if (selectedTopics.length === 0) {
    return (
      <StyledStatusRequestRejected {...props}>
        No topics selected
      </StyledStatusRequestRejected>
    );
  }

  switch (status) {
    case 'pending':
      return (
        <StyledStatusRequestPending {...props}>
          Making the test...
        </StyledStatusRequestPending>
      );

    case 'rejected':
      return (
        <StyledStatusRequestRejected {...props}>
          {error?.response.data.message || error.message}
        </StyledStatusRequestRejected>
      );

    default:
      return null;
  }
};

StatusRequest.propTypes = {
  status: PropTypes.string,
  error: PropTypes.object,
  selectedTopics: PropTypes.array,
};

const StyledStatusRequest = styled.output`
  position: absolute;
  bottom: -3em;
  background-color: ${(p) => p.theme.color.bgAccent};
  padding: 0.5em 1em;
`;

const StyledStatusRequestPending = styled(StyledStatusRequest)`
  color: ${(p) => p.theme.color.green};
`;

const StyledStatusRequestRejected = styled(StyledStatusRequest)`
  background-color: ${(p) => p.theme.color.bgAccent};
  color: ${(p) => p.theme.color.red};
`;

export default StatusRequest;
