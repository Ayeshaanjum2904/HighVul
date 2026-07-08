import { React } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';
import Toolbar from 'common/controls/toolbar';

const InputToolbar = ({ identifier, disabled }) => (
  <Box width="224px" alignContent="center">
    <Toolbar
      disabled={disabled}
      index={identifier}
      style={{ padding: 0, border: 'none' }}
    />
  </Box>
);

InputToolbar.propTypes = {
  identifier: PropTypes.string,
  disabled: PropTypes.bool,
};

InputToolbar.defaultProps = {
  identifier: 'observacao-historico',
  disabled: false,
};

export default InputToolbar;
