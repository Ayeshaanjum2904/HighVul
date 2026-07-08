import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import DetalheModalidadeRegiaoHeader from './detalheModeloRegiaoHeader';
import DetalheModalidadeRegiaoList from './detalheModeloRegiaoList';

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

const DetalheModeloRegiao = ({ modeloRegiao }) => {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <Scrollbars>
        <div className={classes.container}>
          <DetalheModalidadeRegiaoHeader data={modeloRegiao[0]} />

          {(Array.isArray(modeloRegiao) ? modeloRegiao : []).map((mr, i) => (
            <DetalheModalidadeRegiaoList
              data={mr}
              key={i}
            />
          ))}
        </div>
      </Scrollbars>
    </div>

  );
};

DetalheModeloRegiao.propTypes = {
  modeloRegiao: PropTypes.array,
};

DetalheModeloRegiao.defaultProps = {
  modeloRegiao: [],
};

export default DetalheModeloRegiao;
