import React from 'react';
import PropTypes from 'prop-types';

import CancelIcon from '@material-ui/icons/Cancel';
import colors from 'assets/styles/colors';
import _ from 'lodash';
import { Box } from '@mui/material';
import PreviewFile from '../../../../../../previewFile';
import UploadFile from './uploadFile';

import './endAdornment.scss';

const EndAdornment = ({ urlFile, deleteFile }) => (
  <div className="modal-comunicados__input__end-adornment">
    <div className="modal-comunicados__input__end-adornment__preview">
      <UploadFile />
    </div>
    <div className="modal-comunicados__input__end-adornment__upload">
      <PreviewFile />
    </div>
    {
      !_.isNull(urlFile) ? (
        <Box marginLeft="12px" paddingTop="8px">
          <CancelIcon
            onClick={deleteFile}
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
  urlFile: PropTypes.string,
  deleteFile: PropTypes.func,
};

EndAdornment.defaultProps = {
  urlFile: null,
  deleteFile: () => {},
};

export default EndAdornment;
