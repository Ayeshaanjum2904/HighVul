import React from 'react';
import PropTypes from 'prop-types';

import UploadFileButton from 'common/controls/uploadFileButton';
import FileIcon from '@material-ui/icons/Folder';
import colors from 'assets/styles/colors';

const UploadFile = ({
  uploadFile, isLoading, accept, isDisabled,
}) => (
  <UploadFileButton
    disabled={isDisabled}
    isLoading={isLoading}
    onSubmit={uploadFile}
    accept={accept}
    mixpanelAction="Upload Comunicado"
  >
    <FileIcon style={{ color: colors.secundary_color_700 }} />
  </UploadFileButton>
);

UploadFile.propTypes = {
  uploadFile: PropTypes.func,
  isLoading: PropTypes.bool,
  accept: PropTypes.string,
  isDisabled: PropTypes.bool,
};

UploadFile.defaultProps = {
  uploadFile: () => {},
  isLoading: false,
  accept: null,
  isDisabled: false,
};

export default UploadFile;
