import { React } from 'react';
import PropTypes from 'prop-types';

import { LoadingButton } from '@mui/lab';
import { SendRounded } from '@material-ui/icons';

const SendButton = ({ loading, color }) => (
  <LoadingButton
    type="submit"
    color={color}
    variant="contained"
    loading={loading}
    disableElevation
    sx={{
      padding: '10px 12px',
      minWidth: 42,
      height: 38,
      alignSelf: 'flex-end',
    }}
  >
    <SendRounded style={{ fontSize: '18px' }} />
  </LoadingButton>
);

SendButton.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
};

SendButton.defaultProps = {
  loading: false,
  color: 'primary500',
};

export default SendButton;
