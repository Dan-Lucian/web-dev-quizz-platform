import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatusRequest = ({ status }) => {
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
          An error occurred :(
        </StyledStatusRequestRejected>
      );

    default:
      return null;
  }
};

StatusRequest.propTypes = {
  status: PropTypes.string,
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
