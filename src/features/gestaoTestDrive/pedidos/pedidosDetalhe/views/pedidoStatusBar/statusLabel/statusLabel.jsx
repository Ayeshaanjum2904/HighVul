/* eslint-disable no-nested-ternary */
/* eslint-disable  react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import CloseIcon from '@material-ui/icons/Close';
import colors from 'assets/styles/colors';

import './statusLabel.scss';

const useStyles = makeStyles({
  opacity: {
    opacity: (props) => {
      if (props.situacao === 'futuro') {
        return '0.20';
      }
      return '1.0';
    },
  },
  size: {
    fontSize: 18,
    marginTop: -1,
    marginLeft: -1,
  },
  label: {
    color: (props) => {
      if (props.situacao === 'reprovado') {
        return colors.error_color_300;
      }
      if (props.situacao === 'aprovado') {
        return colors.primary_color_600;
      }
      return colors.primary_color_600;
    },
  },
  icon: {
    backgroundColor: (props) => {
      if (props.situacao === 'reprovado') {
        return colors.error_color_300;
      }
      if (props.situacao === 'aprovado') {
        return colors.primary_color_600;
      }
      return colors.primary_color_600;
    },
  },
});

const SelectIcon = (situacao, classes, numero) => {
  if (situacao === 'aprovado') { return <div className="status-label__checkmark" />; }
  if (situacao === 'reprovado') { return <CloseIcon className={`${classes.size} status-label__cancelado`} />; }
  return numero;
};

const StatusLabel = ({
  numero, titulo, situacao,
}) => {
  const classes = useStyles({ situacao });
  return (
    <div className={classes.opacity}>
      <div className={`status-label ${classes.label}`}>
        <div className={`status-label__icon ${classes.icon}`}>
          {SelectIcon(situacao, classes, numero)}
        </div>
        <div className="status-label__text">
          {titulo}
        </div>
      </div>
    </div>
  );
};

StatusLabel.propTypes = {
  numero: PropTypes.number,
  titulo: PropTypes.string,

  situacao: PropTypes.string,
};

StatusLabel.defaultProps = {
  numero: null,
  titulo: null,
  situacao: null,
};

export default StatusLabel;
