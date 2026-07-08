import React from 'react';
import PropTypes from 'prop-types';

import FileIcon from '@material-ui/icons/Folder';
import UploadFileButton from 'common/controls/uploadFileButton';

const UploadContrato = ({
  uploadContrato, isLoading, accept, disabled,
}) => (
  <UploadFileButton
    disabled={disabled}
    isLoading={isLoading}
    onSubmit={uploadContrato}
    accept={accept}
    mixpanelAction="Upload Contrato pedido"
  >
    <FileIcon />
  </UploadFileButton>
);

UploadContrato.propTypes = {
  uploadContrato: PropTypes.func,
  isLoading: PropTypes.bool,
  accept: PropTypes.string,
  disabled: PropTypes.bool,
};

UploadContrato.defaultProps = {
  uploadContrato: () => {},
  isLoading: false,
  accept: null,
  disabled: false,
};

export default UploadContrato;
