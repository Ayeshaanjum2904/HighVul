import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { getPercent } from 'utils/format';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateAreas: "'regiao percentFinanciado valueFinanciado percentAVista valueAVista total'",
    gridTemplateColumns: '1fr        50px              50px             50px       50px     40px',
    gridTemplateRows: '32px',
    fontSize: '12px',
    color: '#555770',
    width: '100%',
    borderBottom: '1px solid #e4e9f2',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  regiao: {
    gridArea: 'regiao',
  },
  percentFinanciado: {
    gridArea: 'percentFinanciado',
    fontWeight: 'bold',
  },
  valueFinanciado: {
    gridArea: 'valueFinanciado',
    color: '#7a7c9a',
  },
  percentAVista: {
    gridArea: 'percentAVista',
    fontWeight: 'bold',
  },
  valueAVista: {
    gridArea: 'valueAVista',
    color: '#7a7c9a',
  },
  total: {
    gridArea: 'total',
    color: '#7a7c9a',
  },
});

const DetalheModalidadeRegiaoList = ({ data, regiao }) => {
  const classes = useStyles();
  const total = data.reduce((sum, b) => sum + (b?.value || 0), 0);
  const aVista = data.find((d) => d.label.includes('Vista'));
  const financiado = data.find((d) => d.label.includes('Financiado'));

  return (
    <div className={classes.container}>
      <div className={`${classes.item} ${classes.regiao}`}>
        {regiao}
      </div>
      <div className={`${classes.item} ${classes.percentFinanciado}`}>
        {`${(getPercent(financiado.value, total))}%`}
      </div>
      <div className={`${classes.item} ${classes.valueFinanciado}`}>
        {financiado.value}
      </div>
      <div className={`${classes.item} ${classes.percentAVista}`}>
        {`${(getPercent(aVista.value, total))}%`}
      </div>
      <div className={`${classes.item} ${classes.valueAVista}`}>
        {aVista.value}
      </div>
      <div className={`${classes.item} ${classes.total}`}>
        {total}
      </div>
    </div>
  );
};

DetalheModalidadeRegiaoList.propTypes = {
  data: PropTypes.array,
  regiao: PropTypes.string,
};

DetalheModalidadeRegiaoList.defaultProps = {
  data: [],
  regiao: null,
};

export default DetalheModalidadeRegiaoList;
