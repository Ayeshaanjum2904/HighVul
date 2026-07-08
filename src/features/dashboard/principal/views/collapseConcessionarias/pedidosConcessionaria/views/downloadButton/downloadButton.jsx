import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from 'common/controls/buttonIcon';
import { makeStyles } from '@material-ui/styles';

import { Download } from 'react-feather';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  icon: {
    marginLeft: '10px',
  },
  button: {
    fontSize: '14px',
    width: '145px',
    height: '40px',
    border: `1px solid ${colors.primary_color_500}`,
    color: colors.primary_color_500,
    borderRadius: '4px',

    '&:hover': {
      background: colors.primary_color_100_24,
      border: `1px solid ${colors.primary_color_700}`,
      color: colors.primary_color_700,
    },
    '&:focus': {
      background: colors.primary_color_100,
      border: `1px solid ${colors.primary_color_700}`,
      color: colors.primary_color_700,
    },
    '&.MuiIconButton-root.Mui-disabled': {
      background: colors.secundary_color_100,
      color: colors.secundary_color_800,
    },
  },
});

const DownloadButton = ({
  tipo, orderBy, getPedidosXlsx, isLoading,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonIcon
        isLoading={isLoading}
        className={classes.button}
        onClick={() => getPedidosXlsx(tipo, orderBy)}
      >
        Exportar XLSX
        <Download size="18" className={classes.icon} />
      </ButtonIcon>
    </div>
  );
};

DownloadButton.propTypes = {
  getPedidosXlsx: PropTypes.func.isRequired,
  tipo: PropTypes.string,
  orderBy: PropTypes.string,
  isLoading: PropTypes.bool,
};

DownloadButton.defaultProps = {
  tipo: null,
  orderBy: null,
  isLoading: false,
};

export default DownloadButton;
