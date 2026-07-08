import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import CardResumo from '../../../commonViews/cardResumo';
import { Loader } from '../../redux/enums';

const useStyles = makeStyles({
  container: {
    height: '100%',
    display: 'flex',
    gap: '12px',
  },
});

const DashboardCards = ({
  isFluxoLoading, isFluxoError, dataLoader, reigisterLoader, getFluxo, fluxo, pedido, getPedidos,
}) => {
  const classes = useStyles();
  useEffect(() => {
    reigisterLoader(Loader.pedidos, getPedidos());
    reigisterLoader(Loader.fluxo, getFluxo());
  }, [reigisterLoader, getFluxo, getPedidos]);

  const indexPedido = dataLoader?.findIndex((l) => l.id === Loader.pedidos);
  return (
    <div className={classes.container}>
      <CardResumo
        item={pedido}
        isLoading={dataLoader[indexPedido]?.isLoading}
        isError={dataLoader[indexPedido]?.isError}
      />
      <CardResumo
        item={fluxo[0]}
        isLoading={isFluxoLoading}
        isError={isFluxoError}
      />
      <CardResumo
        item={fluxo[1]}
        isLoading={isFluxoLoading}
        isError={isFluxoError}
      />
      <CardResumo
        item={fluxo[2]}
        isLoading={isFluxoLoading}
        isError={isFluxoError}
        since
      />
      <CardResumo
        item={fluxo[3]}
        isLoading={isFluxoLoading}
        isError={isFluxoError}
      />
      <CardResumo
        item={fluxo[4]}
        isLoading={isFluxoLoading}
        isError={isFluxoError}
      />
      <CardResumo
        item={fluxo[5]}
        isLoading={isFluxoLoading}
        isError={isFluxoError}
        since
      />
    </div>
  );
};

DashboardCards.propTypes = {
  dataLoader: PropTypes.array,
  reigisterLoader: PropTypes.func,
  getFluxo: PropTypes.func,
  fluxo: PropTypes.array,
  getPedidos: PropTypes.func,
  pedido: PropTypes.object,
  isFluxoLoading: PropTypes.bool,
  isFluxoError: PropTypes.bool,
};

DashboardCards.defaultProps = {
  dataLoader: null,
  reigisterLoader: () => {},
  getFluxo: () => {},
  fluxo: [],
  pedido: [],
  getPedidos: () => {},
  isFluxoLoading: null,
  isFluxoError: null,
};

export default DashboardCards;
