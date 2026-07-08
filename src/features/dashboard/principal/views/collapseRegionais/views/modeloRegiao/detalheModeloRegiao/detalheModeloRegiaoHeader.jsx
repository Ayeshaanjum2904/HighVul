import { makeStyles } from '@material-ui/styles';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    borderBottom: '1px solid #e4e9f2',
  },
  item: {
    color: '#555770',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    height: '36px',
    width: (props) => `${props.width}%`,
  },
});

const DetalheModeloRegiaoHeader = ({ data }) => {
  const width = 100 / (data.regioes.length + 1);
  const classes = useStyles({ width });
  return (
    <div className={classes.container}>
      <div className={classes.item} />
      {(Array.isArray(data.regioes) ? data.regioes : []).map((r, i) => (
        <div className={classes.item} key={i}>
          {r.regiao}
        </div>
      ))}
    </div>
  );
};

DetalheModeloRegiaoHeader.propTypes = {
  data: PropTypes.object,
};

DetalheModeloRegiaoHeader.defaultProps = {
  data: null,
};

export default DetalheModeloRegiaoHeader;
