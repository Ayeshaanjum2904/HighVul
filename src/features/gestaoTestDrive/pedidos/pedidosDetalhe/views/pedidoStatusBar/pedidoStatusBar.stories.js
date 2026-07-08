/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { makeStyles } from '@material-ui/styles';

import PedidoStatusBar from './pedidoStatusBar';

const useStyles = makeStyles({
  style: {
    padding: '12px',
  },
});

storiesOf('Pedidos/PedidoStatusBar', module)
  .addDecorator(withKnobs)
  .add('PedidoStatusBar', () => (<ButtonStory />));

const ButtonStory = () => {
  const classes = useStyles();
  const status = select('status', [
    'analise_credito',
    'financiamento_reversao',
    'financiamento_analise',
    'financiamento_finalizacao',
    'separacao',
    'pronto_para_faturamento',
    'faturado',
    'finalizado',
    'cancelado',
    'cancelado_pelo_cliente',
  ], 'analise_credito');

  return (
    <div>
      <div className={classes.style}>
        Selecione o status na aba knobs.
      </div>
      <div className={classes.style}>
        status:
        {status}
      </div>
      <div className={classes.style}>
        <PedidoStatusBar status={status} />
      </div>
    </div>
  );
};
