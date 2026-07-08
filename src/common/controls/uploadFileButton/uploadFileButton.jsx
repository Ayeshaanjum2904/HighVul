import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { Mixpanel } from 'modules';
import ButtonICon from '../buttonIcon';

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: 0,
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:disabled': {
      color: 'rgba(0, 0, 0, 0.54)',
    },
    width: '100%',
    marginTop: (isLoading) => (isLoading ? 3 : 0),
  },
  input: {
    display: 'none',
  },
  loading: {
    marginTop: 3,
  },
}));

const UploadFileButton = ({
  onSubmit, isLoading, accept, disabled, children, mixpanelAction, changeProgress,
}) => {
  const fileInput = useRef();
  const classes = useStyles(isLoading);
  return (
    <>
      <ButtonICon
        className={classes.button}
        disabled={disabled}
        disableRipple
        isLoading={isLoading}
        onClick={() => {
          if (!disabled) {
            fileInput.current.value = null;
            fileInput.current.click();
            Mixpanel.trackUploadFiles(mixpanelAction);
          }
        }}
        changeProgress={changeProgress}
      >
        {children}
      </ButtonICon>
      <input
        className={classes.input}
        type="file"
        id="file"
        accept={accept}
        ref={fileInput}
        onChange={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (e.target.files && e.target.files.length > 0) {
            onSubmit(e.target.files[0]);
          }
        }}
      />
    </>
  );
};

UploadFileButton.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  changeProgress: PropTypes.bool,
  mixpanelAction: PropTypes.string.isRequired,
};

UploadFileButton.defaultProps = {
  onSubmit: () => {},
  isLoading: false,
  accept: null,
  disabled: false,
  children: null,
  changeProgress: false,
};

export default UploadFileButton;
