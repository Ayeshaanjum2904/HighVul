import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledAttachFileIcon, useStyles } from './fileButton.style';

const FileButton = ({
  onUpload, accept, disabled, error, label, width, secondary, multipleSelection,
}) => {
  const styles = useStyles();

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    if (multipleSelection) onUpload(files);
    else files.forEach((file) => onUpload(file));
    e.target.value = null;
  };

  return (
    <StyledButton
      variant="contained"
      component="label"
      startIcon={(
        <StyledAttachFileIcon
          error={error}
          className={secondary && styles.secondaryIcon}
        />
      )}
      disabled={disabled}
      error={!!error}
      width={width}
      className={`${secondary && styles.secondaryButton} ${secondary && error && styles.secondaryButtonError}`}
    >
      {label}
      <input
        id="upload-input"
        type="file"
        onChange={handleFileInputChange}
        accept={Array.isArray(accept) ? accept.join(',') : ''}
        disabled={disabled}
        hidden
        multiple={multipleSelection}
      />
    </StyledButton>
  );
};

FileButton.propTypes = {
  onUpload: PropTypes.func.isRequired,
  accept: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  width: PropTypes.string,
  secondary: PropTypes.bool,
  multipleSelection: PropTypes.bool,
};

FileButton.defaultProps = {
  accept: ['.pdf', '.png', '.jpg', '.doc', '.docx', '.xls', '.xlsx'],
  disabled: false,
  error: false,
  label: 'Inserir arquivo',
  width: '140px',
  secondary: false,
  multipleSelection: false,
};

export default FileButton;
