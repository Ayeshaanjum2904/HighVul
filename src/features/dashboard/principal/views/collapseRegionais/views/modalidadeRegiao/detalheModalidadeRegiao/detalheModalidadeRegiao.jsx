import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import DetalheModalidadeRegiaoHeader from './detalheModalidadeRegiaoHeader';
import DetalheModalidadeRegiaoList from './detalheModalidadeRegiaoList';

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

const DetalheModalidadeRegiao = ({ pedidosRegiao }) => {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <Scrollbars>
        <div className={classes.container}>
          <DetalheModalidadeRegiaoHeader />

          {(Array.isArray(pedidosRegiao) ? pedidosRegiao : []).map((pr, i) => (
            <DetalheModalidadeRegiaoList
              regiao={pr.regiao}
              data={pr.modalidade}
              key={i}
            />
          ))}
        </div>
      </Scrollbars>
    </div>

  );
};

DetalheModalidadeRegiao.propTypes = {
  pedidosRegiao: PropTypes.array,
};

DetalheModalidadeRegiao.defaultProps = {
  pedidosRegiao: [],
};

export default DetalheModalidadeRegiao;
