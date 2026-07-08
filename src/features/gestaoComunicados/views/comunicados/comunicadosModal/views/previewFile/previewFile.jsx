import React from 'react';
import PropTypes from 'prop-types';

import PreviewFileButton from 'common/controls/previewFileButton';

const PreviewFile = ({ disabled, onClick }) => (
  <PreviewFileButton
    disabled={disabled}
    onClick={onClick}
    mixpanelAction="Preview comunicado"
  />
);

PreviewFile.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

PreviewFile.defaultProps = {
  disabled: false,
};

export default PreviewFile;
