import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import DetalheCreditoRegiaoHeader from './detalheCreditoRegiaoHeader';
import DetalheCreditoRegiaoList from './detalheCreditoRegiaoList';

const useStyles = makeStyles({
  outer: {
    background: '#edf1f7',
    paddingRight: '10px',
    paddingLeft: '14px',
    borderRadius: '4px',
    width: '100%',
    height: '100%',
  },
  container: {
    paddingRight: '20px',
  },
});

const DetalheCreditoRegiao = ({ pedidosRegiao }) => {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <Scrollbars>
        <div className={classes.container}>
          <DetalheCreditoRegiaoHeader />

          {(Array.isArray(pedidosRegiao) ? pedidosRegiao : []).map((pr, i) => (
            <DetalheCreditoRegiaoList
              regiao={pr.regiao}
              data={pr.aprovacaoCredito}
              key={i}
            />
          ))}
        </div>
      </Scrollbars>
    </div>

  );
};

DetalheCreditoRegiao.propTypes = {
  pedidosRegiao: PropTypes.array,
};

DetalheCreditoRegiao.defaultProps = {
  pedidosRegiao: [],
};

export default DetalheCreditoRegiao;
