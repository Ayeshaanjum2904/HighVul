import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import {
  formatNomeConcessionaria,
  formatCodigoConcessionaria,
  camelFormat,
} from 'utils/format';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateAreas: "'codBuc  marca concessionaria  regional  total  aVista  financiado '",
    gridTemplateColumns: '5em     4.5em      1fr          9em     4em    4em      4em',
    gridTemplateRows: '30px',
    width: '100%',
  },
  item: {
    fontSize: '14px',
    color: '#555770',
    display: 'flex',
    alignItems: 'center',
  },
  codBuc: {
    gridArea: 'codBuc',
  },
  marca: {
    gridArea: 'marca',
  },
  concessionaria: {
    gridArea: 'concessionaria',
  },
  regional: {
    gridArea: 'regional',
  },
  total: {
    gridArea: 'total',
  },
  aVista: {
    gridArea: 'aVista',
  },
  financiado: {
    gridArea: 'financiado',
  },
});

const DetalhePedidosConcessionariaList = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={`${classes.item} ${classes.codBuc}`}>
        {formatCodigoConcessionaria(data.corretorId ? data?.corretorId : data?.codBuc)}
      </div>
      <div className={`${classes.item} ${classes.marca}`}>
        {camelFormat(data?.marca)}
      </div>
      <div className={`${classes.item} ${classes.concessionaria}`}>
        {formatNomeConcessionaria(data?.concessionaria)}
      </div>
      <div className={`${classes.item} ${classes.regional}`}>
        {camelFormat(data?.regiao, 2)}
      </div>
      <div className={`${classes.item} ${classes.total}`}>
        {data?.total}
      </div>
      <div className={`${classes.item} ${classes.aVista}`}>
        {data?.aVista}
      </div>
      <div className={`${classes.item} ${classes.financiado}`}>
        {data?.financiado}
      </div>
    </div>
  );
};

DetalhePedidosConcessionariaList.propTypes = {
  data: PropTypes.object,
};

DetalhePedidosConcessionariaList.defaultProps = {
  data: null,
};

export default DetalhePedidosConcessionariaList;
