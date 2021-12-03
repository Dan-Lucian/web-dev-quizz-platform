import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatusRequest = ({ status, error, selectedTopics }) => {
  if (selectedTopics.length === 0) {
    return (
      <StyledStatusRequestRejected>
        No selected topics
      </StyledStatusRequestRejected>
    );
  }

  switch (status) {
    case 'pending':
      return (
        <StyledStatusRequestPending>
          Making the test...
        </StyledStatusRequestPending>
      );

    case 'rejected':
      return (
        <StyledStatusRequestRejected>
          {error?.response.data || error.message}
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

const StyledStatusRequest = styled.div`
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
