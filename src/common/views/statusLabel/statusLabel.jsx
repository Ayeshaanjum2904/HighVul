/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import CloseIcon from '@material-ui/icons/Close';
import colors from 'assets/styles/colors';

import './statusLabel.scss';

const useStyles = makeStyles({
  opacity: {
    opacity: '0.20',
  },
  color: {
    color: '#555770',
  },
  size: {
    fontSize: 18,
    marginTop: -1,
    marginLeft: -1,
  },
});

// TODO: rename e implementa
const StatusLabel = ({
  number, label, color, checkmark, active,
}) => {
  const classes = useStyles();
  if (color === 'blue' && checkmark === false) {
    return (
      <div className={classes.color}>
        <div className="common__modal__status-bar">
          <div className="common__modal__status-bar__icon">
            <div className="common__modal__status-bar__icon-checkmark" />
          </div>
          <div className="common__modal__status-bar__text">
            {label}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={(color === 'gray' && !active) ? classes.opacity : null}>
      <div className="common__modal__status-bar" style={color === 'red' ? { color: colors.error_color_300 } : active ? {} : { color: colors.primary_color_600 }}>
        <div className="common__modal__status-bar__icon" style={color === 'red' ? { backgroundColor: colors.error_color_300 } : active ? {} : { backgroundColor: colors.primary_color_600 }}>
          {color === 'red' ? <CloseIcon className={classes.size} /> : number}
        </div>
        <div className="common__modal__status-bar__text" style={active && color !== 'red' ? { color: colors.primary_color_600 } : color === 'red' ? { color: colors.error_color_300 } : { color: 'rgba(143, 155, 179, 1)' }}>
          {label}
        </div>
      </div>
    </div>
  );
};

StatusLabel.propTypes = {
  number: PropTypes.number,
  label: PropTypes.string,
  color: PropTypes.string,
  active: PropTypes.bool,
  checkmark: PropTypes.bool,
};

StatusLabel.defaultProps = {
  number: null,
  label: '',
  color: '',
  checkmark: false,
  active: false,
};

export default StatusLabel;
