import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from 'common/controls/buttonIcon';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    display: (props) => (props.disabled ? 'none' : 'flex'),
    width: '16px',
    height: '16px',
    color: '#A6A8BB',
  },
});

const UploadCancelButton = ({ disabled, onClick }) => {
  const classes = useStyles({ disabled });
  return (
    <ButtonIcon
      onClick={onClick}
    >
      <CancelIcon classes={{ root: classes.button }} />
    </ButtonIcon>
  );
};

UploadCancelButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

UploadCancelButton.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default UploadCancelButton;
