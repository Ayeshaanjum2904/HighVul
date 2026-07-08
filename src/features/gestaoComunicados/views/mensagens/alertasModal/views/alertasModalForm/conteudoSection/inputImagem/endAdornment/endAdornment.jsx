import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';
import CancelIcon from '@material-ui/icons/Cancel';
import colors from 'assets/styles/colors';
import PreviewImagem from '../../previewImagem';
import UploadImagem from './uploadImagem';

import './endAdornment.scss';

const EndAdornment = ({ deleteImagem, urlImagem, isLoading }) => (
  <div className="modal-alertas__input__end-adornment">
    <div className="modal-alertas__input__end-adornment__preview">
      <UploadImagem accept=".jpg,.png" />
    </div>
    <div className="modal-alertas__input__end-adornment__upload">
      <PreviewImagem />
    </div>
    {
      urlImagem && !isLoading ? (
        <Box marginLeft="12px" paddingTop="8px">
          <CancelIcon
            onClick={deleteImagem}
            style={{
              fontSize: '16px',
              cursor: 'pointer',
              color: colors.secundary_color_700,
            }}
          />
        </Box>
      ) : null
    }
  </div>
);

EndAdornment.propTypes = {
  deleteImagem: PropTypes.func,
  urlImagem: PropTypes.string,
  isLoading: PropTypes.bool,
};

EndAdornment.defaultProps = {
  deleteImagem: () => {},
  urlImagem: null,
  isLoading: false,
};

export default EndAdornment;
