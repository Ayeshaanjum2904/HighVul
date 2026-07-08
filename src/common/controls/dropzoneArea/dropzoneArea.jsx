import React, { useCallback, useMemo } from 'react';
import { Stack, Typography } from '@mui/material';
import UploadIcon from 'assets/icons/upload';
import colors from 'assets/styles/colors';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { BoxDropzone, useStyles } from './dropzoneArea.style';

const DropzoneArea = ({
  children, childrenProps, label, showArea, onUpload, error,
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    onUpload(acceptedFiles);
  }, []);

  const addChildProps = (componentChildren) => React.Children.map(componentChildren, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, childrenProps);
    }
    return child;
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, noClick: true });
  const styles = useStyles();
  const contentGap = useMemo(() => (label ? 1.5 : 2.5), [label]);

  return showArea ? (
    <BoxDropzone
      {...getRootProps()}
      isDragActive={isDragActive}
      className={`${error && styles.errorBox} ${error && isDragActive && styles.errorOnDrag}`}
    >
      <Stack alignItems="center" justifyContent="center" gap={contentGap} height="100%">
        <UploadIcon size="33px" color={error ? colors.error_color_200 : colors.primary_color_600} />

        <Typography component="span" variant="18_regular" className={`${styles.textoSoltar} ${error && styles.errorColor}`}>
          Solte o arquivo aqui para anexar
        </Typography>

        {label && (
        <Typography component="span" variant="18_regular" className={`${styles.textoLabel} ${error && styles.errorColor}`}>
          {label}
        </Typography>
        )}

        <Stack direction="row" alignItems="center" gap={1}>
          <div className={`${styles.linha} ${error && styles.errorBorder}`} />
          <Typography component="span" variant="18_regular" className={`${styles.textoOu} ${error && styles.errorColor}`}>
            OU
          </Typography>
          <div className={`${styles.linha} ${error && styles.errorBorder}`} />
        </Stack>
        {addChildProps(children)}
      </Stack>
      <input {...getInputProps()} />
    </BoxDropzone>
  )
    : children;
};

DropzoneArea.propTypes = {
  children: PropTypes.node,
  childrenProps: PropTypes.object,
  label: PropTypes.string,
  onUpload: PropTypes.func,
  showArea: PropTypes.bool,
  error: PropTypes.bool,
};

DropzoneArea.defaultProps = {
  children: null,
  childrenProps: {},
  label: '',
  onUpload: () => {},
  showArea: false,
  error: false,
};

export default DropzoneArea;
