import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledAttachFileIcon } from './uploadButton.style';

const UploadButton = ({
  onUpload, accept, disabled, error,
}) => {
  const handleFileInputChange = (e) => {
    Array.from(e.target.files).forEach((file) => onUpload(file));
    e.target.value = null;
  };

  return (
    <StyledButton
      variant="contained"
      component="label"
      startIcon={<StyledAttachFileIcon error={error} />}
      disabled={disabled}
      error={error}
    >
      Adicionar arquivo
      <input
        id="upload-input"
        type="file"
        onChange={handleFileInputChange}
        accept={Array.isArray(accept) ? accept.join(',') : ''}
        disabled={disabled}
        hidden
      />
    </StyledButton>
  );
};

UploadButton.propTypes = {
  onUpload: PropTypes.func.isRequired,
  accept: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

UploadButton.defaultProps = {
  accept: ['.pdf', '.png', '.jpg', '.doc', '.docx', '.xls', '.xlsx'],
  disabled: false,
  error: false,
};

export default UploadButton;
