import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Loader } from '../../../../redux/enums';

import CardBarChart from '../../../../../commonViews/cardChart';
import DetalheModeloRegiao from './detalheModeloRegiao';

const useStyles = makeStyles({
  container: {
    height: '450px',
    minWidth: '800px',
  },
});

const ModeloRegiao = ({
  dateFilter, isLoading, isError, data,
  registerLoader, getModeloRegiao,
}) => {
  useEffect(() => {
    registerLoader(Loader.modeloRegiao, getModeloRegiao());
  }, [registerLoader, getModeloRegiao]);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CardBarChart
        title="Test Drive modelo x região"
        data={data}
        dateFilter={dateFilter}
        isLoading={isLoading}
        isError={isError}
        isEmpty={!(data?.labels?.length > 0)}
        backgroundColor="white"
        DetailBarChart={DetalheModeloRegiao}
        height={174}
      />
    </div>
  );
};

ModeloRegiao.propTypes = {
  dateFilter: PropTypes.string,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  data: PropTypes.object,
  registerLoader: PropTypes.func,
  getModeloRegiao: PropTypes.func,
};

ModeloRegiao.defaultProps = {
  dateFilter: '',
  isLoading: false,
  isError: false,
  data: null,
  registerLoader: () => {},
  getModeloRegiao: () => {},
};

export default ModeloRegiao;
