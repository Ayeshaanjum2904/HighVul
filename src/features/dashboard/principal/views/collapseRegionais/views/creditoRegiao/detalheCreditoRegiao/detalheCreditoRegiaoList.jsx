import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { getPercent } from 'utils/format';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateAreas: "'regiao percentAprovado valueAprovado percentReprovado valueReprovado total'",
    gridTemplateColumns: '1fr        50px              50px             50px       50px       40px',
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
  percentAprovado: {
    gridArea: 'percentAprovado',
    fontWeight: 'bold',
  },
  valueAprovado: {
    gridArea: 'valueAprovado',
    color: '#7a7c9a',
  },
  percentReprovado: {
    gridArea: 'percentReprovado',
    fontWeight: 'bold',
  },
  valueReprovado: {
    gridArea: 'valueReprovado',
    color: '#7a7c9a',
  },
  total: {
    gridArea: 'total',
    color: '#7a7c9a',
  },
});

const DetalheCreditoRegiaoList = ({ data, regiao }) => {
  const classes = useStyles();
  const total = data.reduce((sum, b) => sum + (b?.value || 0), 0);
  const aprovado = data.find((d) => d.label.includes('Aprovado'));
  const reprovado = data.find((d) => d.label.includes('Reprovado'));

  return (
    <div className={classes.container}>
      <div className={`${classes.item} ${classes.regiao}`}>
        {regiao}
      </div>
      <div className={`${classes.item} ${classes.percentAprovado}`}>
        {`${(getPercent(aprovado.value, total))}%`}
      </div>
      <div className={`${classes.item} ${classes.valueAprovado}`}>
        {aprovado.value}
      </div>
      <div className={`${classes.item} ${classes.percentReprovado}`}>
        {`${(getPercent(reprovado.value, total))}%`}
      </div>
      <div className={`${classes.item} ${classes.valueReprovado}`}>
        {reprovado.value}
      </div>
      <div className={`${classes.item} ${classes.total}`}>
        {total}
      </div>
    </div>
  );
};

DetalheCreditoRegiaoList.propTypes = {
  data: PropTypes.array,
  regiao: PropTypes.string,
};

DetalheCreditoRegiaoList.defaultProps = {
  data: [],
  regiao: null,
};

export default DetalheCreditoRegiaoList;
