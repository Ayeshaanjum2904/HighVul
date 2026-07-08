import { React } from 'react';
import PropTypes from 'prop-types';

import {
  Box, Checkbox, FormControlLabel, Typography,
} from '@mui/material';

const CheckboxAnexo = ({ value, setValue }) => (
  <Box width="100px" height="38px" alignSelf="flex-end" alignContent="center">
    <FormControlLabel
      sx={{ margin: 0 }}
      control={(
        <Checkbox
          onChange={() => setValue(!value)}
          size="small"
          sx={{
            padding: 0,
            '&.Mui-checked': {
              color: '#555770',
            },
          }}
        />
      )}
      label={(
        <Typography sx={{ fontSize: 12, marginLeft: 1 }}>
          Enviar Anexo
        </Typography>
      )}
    />
  </Box>
);

CheckboxAnexo.propTypes = {
  value: PropTypes.bool,
  setValue: PropTypes.func,
};

CheckboxAnexo.defaultProps = {
  value: false,
  setValue: () => {},
};

export default CheckboxAnexo;
