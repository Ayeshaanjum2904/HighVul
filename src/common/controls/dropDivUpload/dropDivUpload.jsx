import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

import { Mixpanel } from 'modules';

const useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  },
  div: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    cursor: (props) => (props.disabled ? 'default' : 'pointer'),
  },
}));

const DropDivUpload = ({
  children, uploadFiles, accept, multiple,
  disabled, selectedFiles, maxFiles, className, mixpanelAction,
}) => {
  const fileInput = useRef();
  const classes = useStyles({ disabled });
  let filesToUpload = maxFiles - selectedFiles.length;

  const handleFiles = async (files) => {
    const newFiles = [];
    files.forEach((f) => {
      const shouldUploadFile = filesToUpload > 0 && accept.includes(f.type)
       && _.isEmpty((selectedFiles || []).filter((sf) => sf.name === f.name));
      if (shouldUploadFile) {
        const newFile = f;
        newFile.isError = false;
        newFile.progress = 0;

        newFiles.push(newFile);
        filesToUpload -= 1;
      }
    });

    if (newFiles.length > 0) {
      uploadFiles(newFiles);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };
  const fileDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.dataTransfer.files.length > 0 && !disabled) {
      handleFiles(Array.from(e.dataTransfer.files));
      Mixpanel.trackUploadFiles(mixpanelAction);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`${classes.div} ${className}`}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
      onClick={() => {
        if (!disabled) {
          fileInput.current.value = null;
          fileInput.current.click();
          Mixpanel.trackUploadFiles(mixpanelAction);
        }
      }}
    >
      <input
        className={classes.input}
        multiple={multiple}
        type="file"
        accept={accept}
        ref={fileInput}
        onChange={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (e.target.files && e.target.files.length > 0) {
            handleFiles(Array.from(e.target.files));
          }
        }}
      />
      {children}
    </div>
  );
};

DropDivUpload.propTypes = {
  children: PropTypes.node,
  uploadFiles: PropTypes.func,
  disabled: PropTypes.bool,
  selectedFiles: PropTypes.array,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  maxFiles: PropTypes.number,
  className: PropTypes.string,
  mixpanelAction: PropTypes.string.isRequired,
};

DropDivUpload.defaultProps = {
  children: null,
  uploadFiles: () => {},
  disabled: false,
  selectedFiles: [],
  accept: '.pdf',
  multiple: false,
  maxFiles: 1,
  className: '',
};

export default DropDivUpload;
