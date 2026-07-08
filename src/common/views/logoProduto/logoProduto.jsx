import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  containerBase: {
    height: '16px',
    minWidth: '60px',
    borderRadius: '4px',
    fontSize: '10px',
    fontWeight: 'normal',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerColor: ({ produto }) => {
    switch (String(produto).toLowerCase()) {
      case 'test drive':
        return {
          backgroundColor: colors.success_color_100_24,
          color: colors.terciary_color_700,
          border: 'none',
        };
      case 'service car':
        return {
          backgroundColor: colors.error_color_300_08,
          color: colors.error_color_400,
          border: 'none',
        };
      case 'backup car':
        return {
          backgroundColor: colors.alert_color_100_36,
          color: colors.alert_color_500,
          border: 'none',
        };
      case 'test drive de exceção':
        return {
          backgroundColor: colors.secundary_color_100_24,
          color: colors.secundary_color_700,
          border: 'none',
          width: 110,
        };
      case 'test drive adicional':
        return {
          backgroundColor: colors.primary_color_100_36,
          color: colors.primary_color_700,
          border: 'none',
          width: 105,
        };
      case 'janela de lançamentos':
      case 'novas concessionárias':
        return {
          backgroundColor: colors.primary_color_100_24,
          color: colors.secundary_color_700,
          border: 'none',
          width: 120,
        };
      case 'novos veículos':
        return {
          backgroundColor: colors.primary_color_100_24,
          color: colors.secundary_color_700,
          border: 'none',
          width: 95,
        };
      default:
        return {
          backgroundColor: 'white',
          color: '#8f9bb3',
          border: '1px solid #8f9bb3',
        };
    }
  },
});

const LogoProduto = ({
  produto,
}) => {
  const classes = useStyles({ produto });

  return (
    <div className={`${classes.containerBase} ${classes.containerColor}`}>
      {produto}
    </div>
  );
};

LogoProduto.propTypes = {
  produto: PropTypes.string,
};

LogoProduto.defaultProps = {
  produto: '',
};

export default LogoProduto;
