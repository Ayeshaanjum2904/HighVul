import React from 'react';
import PropTypes from 'prop-types';

import PedidosIcon from '@material-ui/icons/DriveEta';
import ComercialIcon from '@material-ui/icons/FileCopy';
import { CheckSquare, FolderPlus, FileText } from 'react-feather';
import RevertidoIcon from '@material-ui/icons/Cached';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  icon: {
    fill: 'none',
    width: '1em',
    height: '1em',
    fontSize: '1.5rem',
    flexShrink: 0,
  },
});

const CardResumoIcon = ({ etapa }) => {
  const classes = useStyles();
  switch (etapa) {
    case 'pedidos':
      return <PedidosIcon />;
    case 'analise_comercial':
      return <ComercialIcon />;
    case 'analise_credito':
      return <CheckSquare className={classes.icon} />;
    case 'reversao':
      return <RevertidoIcon />;
    case 'separacao':
      return <FolderPlus className={classes.icon} />;
    case 'pronto_para_faturamento':
      return <FileText className={classes.icon} />;
    case 'faturado':
      return <MonetizationOnIcon />;
    default:
      return <PedidosIcon />;
  }
};

CardResumoIcon.propTypes = {
  etapa: PropTypes.string,
};

CardResumoIcon.defaultProps = {
  etapa: null,
};

export default CardResumoIcon;
