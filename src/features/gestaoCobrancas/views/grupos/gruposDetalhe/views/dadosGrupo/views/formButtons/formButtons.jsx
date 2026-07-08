import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import SendButton from './sendButton';
import EditButton from './editButton';
import CancelButton from './cancelButton';

const useStyles = makeStyles({
  separator: {
    border: '1px solid #7A7C9A',
    height: '12px',
    width: '1px',
    margin: '4px 15px',
  },
});

const FormButtons = ({ isEditing }) => {
  const classes = useStyles();
  return (
    !isEditing
      ? <EditButton />
      : (
        <>
          <SendButton />
          <div className={classes.separator} />
          <CancelButton />
        </>
      )
  );
};

FormButtons.propTypes = {
  isEditing: PropTypes.bool.isRequired,
};

export default FormButtons;
