import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { injectColors } from 'common/charts/formatting/format';
import colors from 'assets/styles/colors';
import { Loader } from '../../../../redux/enums';
import CardChart from '../../../../../commonViews/cardChart';

const useStyles = makeStyles({
  container: {
    height: '420px',
    minWidth: '800px',
    marginBottom: '25px',
  },
});

const PedidosRegiao = ({
  dateFilter, isLoading, isError, registerLoader, getPedidosRegiao, data,
}) => {
  useEffect(() => {
    registerLoader(Loader.pedidosRegiao, getPedidosRegiao());
  }, [registerLoader, getPedidosRegiao]);

  const classes = useStyles();
  const formatedData = injectColors(data, [colors.primary_color_600]);

  return (
    <div className={classes.container}>
      <CardChart
        title="Total de pedidos x região"
        data={formatedData}
        dateFilter={dateFilter}
        isLoading={isLoading}
        isError={isError}
        isEmpty={data?.labels?.length <= 0}
        hideLegend
        isHorizontal
        backgroundColor="white"
        height={283}
      />
    </div>
  );
};

PedidosRegiao.propTypes = {
  dateFilter: PropTypes.string,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  getPedidosRegiao: PropTypes.func,
  registerLoader: PropTypes.func,
  data: PropTypes.object,
};

PedidosRegiao.defaultProps = {
  dateFilter: '',
  isLoading: false,
  isError: false,
  getPedidosRegiao: () => {},
  registerLoader: () => {},
  data: null,
};

export default PedidosRegiao;
