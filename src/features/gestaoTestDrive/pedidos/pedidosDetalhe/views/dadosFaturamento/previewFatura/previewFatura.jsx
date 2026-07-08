import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DownloadFileButton from 'common/controls/downloadFileButton';

const PreviewFatura = ({
  disabled, urlFatura, currentStatus, onDownload,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      await onDownload();
    } finally {
      setIsDownloading(false);
    }
  };

  return (urlFatura || currentStatus === 'pronto_para_faturamento')
    ? (
      <DownloadFileButton
        disabled={disabled || isDownloading}
        fileUrl={urlFatura}
        mixpanelAction="Preview Nota Fiscal do pedido"
        onDownload={handleDownload}
      />
    ) : null;
};

PreviewFatura.propTypes = {
  urlFatura: PropTypes.string,
  currentStatus: PropTypes.string,
  disabled: PropTypes.bool,
  onDownload: PropTypes.func.isRequired,
};

PreviewFatura.defaultProps = {
  disabled: false,
  urlFatura: null,
  currentStatus: null,
};

export default PreviewFatura;
