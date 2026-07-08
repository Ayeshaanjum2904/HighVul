import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import { injectColorsLineChart } from 'common/charts/formatting/format';
import * as ChartColors from 'common/charts/formatting/colors';
import { Loader } from '../../redux/enums';

import CardChart from '../../../commonViews/cardChart';

const useStyles = makeStyles(() => ({
  container: {
    height: '420px',
    minWidth: '800px',
    marginBottom: '25px',
  },
}));

const PedidosArea = ({
  dateFilter, isLoading, isError, registerLoader, getPedidosPeriodo, data,
}) => {
  useEffect(() => {
    registerLoader(Loader.pedidosPeriodo, getPedidosPeriodo());
  }, [registerLoader, getPedidosPeriodo]);
  const classes = useStyles();
  const formatedData = injectColorsLineChart(data, ChartColors.fidisColors);
  return (
    <div className={classes.container}>
      <CardChart
        title="Quantidade de pedidos x período"
        data={formatedData}
        dateFilter={dateFilter}
        isLoading={isLoading}
        isError={isError}
        isEmpty={data?.labels?.length <= 0}
        hideDetails
        isLine
        isHorizontal
        height={304}
      />
    </div>
  );
};

PedidosArea.propTypes = {
  dateFilter: PropTypes.string,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  getPedidosPeriodo: PropTypes.func,
  registerLoader: PropTypes.func,
  data: PropTypes.object,
};

PedidosArea.defaultProps = {
  dateFilter: '',
  isLoading: false,
  isError: false,
  getPedidosPeriodo: () => {},
  registerLoader: () => {},
  data: null,
};

export default PedidosArea;
