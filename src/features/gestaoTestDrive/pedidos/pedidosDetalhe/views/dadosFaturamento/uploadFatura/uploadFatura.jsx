import React from 'react';
import PropTypes from 'prop-types';

import UploadFileButton from 'common/controls/uploadFileButton';
import PaperClipIcon from 'assets/icons/paper-clip';

const UploadFatura = ({
  uploadFaturaPedido, disabled, isLoading, accept,
}) => (
  <UploadFileButton
    disabled={disabled}
    isLoading={isLoading}
    onSubmit={uploadFaturaPedido}
    accept={accept}
    mixpanelAction="Upload Nota Fiscal do pedido"
    changeProgress
  >
    <PaperClipIcon />
  </UploadFileButton>
);

UploadFatura.propTypes = {
  uploadFaturaPedido: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  accept: PropTypes.string,
};

UploadFatura.defaultProps = {
  uploadFaturaPedido: () => {},
  disabled: false,
  isLoading: false,
  accept: null,
};

export default UploadFatura;
