import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import DetalhePedidosConcessionariaHeader from './detalhePedidosConcessionariaHeader';
import DetalhePedidosConcessionariaList from './detalhePedidosConcessionariaList';

const useStyles = makeStyles({
  outer: {
    background: 'white', // #f7f9fc
    paddingLeft: '14px',
    width: '100%',
    height: '100%',
  },
  container: {
    paddingRight: '20px',
  },
});

const DetalhePedidosConcessionaria = ({ pedidosConcessionaria }) => {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <Scrollbars>
        <div className={classes.container}>
          <DetalhePedidosConcessionariaHeader />

          {(Array.isArray(pedidosConcessionaria) ? pedidosConcessionaria : []).map((pc, i) => (
            <DetalhePedidosConcessionariaList
              data={pc}
              key={i}
            />
          ))}
        </div>
      </Scrollbars>
    </div>

  );
};

DetalhePedidosConcessionaria.propTypes = {
  pedidosConcessionaria: PropTypes.array,
};

DetalhePedidosConcessionaria.defaultProps = {
  pedidosConcessionaria: [],
};

export default DetalhePedidosConcessionaria;
