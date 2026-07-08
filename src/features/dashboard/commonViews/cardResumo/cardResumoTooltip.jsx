import React from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip, makeStyles,
} from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import colors from 'assets/styles/colors';
import ThemeProvider from './themes';

const useStyles = makeStyles({
  icone: {
    fill: colors.secundary_color_700,
    marginLeft: '4px',
    fontSize: 'medium',
  },
  tooltip: {
    title: { background: 'rgba(206, 25, 25, 0.8)' },
  },
});

const CardResumoTooltip = ({ etapa }) => {
  const classes = useStyles();
  switch (etapa) {
    case 'pedidos':
      return (
        <ThemeProvider>
          <Tooltip
            className={classes.tooltip}
            title="Soma de todos os pedidos à vista e financiados. Não inclui pedidos cancelados."
          >
            <HelpIcon className={classes.icone} />
          </Tooltip>
        </ThemeProvider>
      );
    case 'analise_comercial':
      return (
        <ThemeProvider>
          <Tooltip
            className={classes.tooltip}
            title="Pedidos à vista e financiados aguardando aprovação comercial da montadora."
          >
            <HelpIcon className={classes.icone} />
          </Tooltip>
        </ThemeProvider>
      );
    case 'analise_credito':
      return (
        <ThemeProvider>
          <Tooltip
            className={classes.tooltip}
            title="Pedidos à vista e financiados aprovados pelo comercial e aguardando aprovação de crédito."
          >
            <HelpIcon className={classes.icone} />
          </Tooltip>
        </ThemeProvider>
      );
    case 'reversao':
      return (
        <ThemeProvider>
          <Tooltip
            className={classes.tooltip}
            title="Quantidade de pedidos à vista aguardando possível reversão para financiado."
          >
            <HelpIcon className={classes.icone} />
          </Tooltip>
        </ThemeProvider>
      );
    case 'separacao':
      return (
        <ThemeProvider>
          <Tooltip
            className={classes.tooltip}
            title="Pedidos aguardando separação do veículo pela área comercial da montadora. Os pedidos cancelados (reprovados) não são incluídos na soma total."
          >
            <HelpIcon className={classes.icone} />
          </Tooltip>
        </ThemeProvider>
      );
    case 'pronto_para_faturamento':
      return (
        <ThemeProvider>
          <Tooltip
            className={classes.tooltip}
            title="Pedidos aguardando faturamento do veículo pela área comercial da montadora. Os pedidos cancelados (reprovados) não são incluídos na soma total."
          >
            <HelpIcon className={classes.icone} />
          </Tooltip>
        </ThemeProvider>
      );
    case 'faturado':
      return (
        <ThemeProvider>
          <Tooltip
            className={classes.tooltip}
            title="Pedidos faturados e financiados aguardando o pagamento do contrato pelo Banco Stellantis."
          >
            <HelpIcon className={classes.icone} />
          </Tooltip>
        </ThemeProvider>
      );
    default:
      return null;
  }
};

CardResumoTooltip.propTypes = {
  etapa: PropTypes.string,
};

CardResumoTooltip.defaultProps = {
  etapa: null,
};

export default CardResumoTooltip;
