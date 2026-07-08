import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    borderBottom: '1px solid #e4e9f2',
  },
  item: {
    fontSize: '12px',
    color: '#7A7C9A',
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    width: (props) => `${props.width}%`,
  },
  title: {
    color: '#555770',
  },
});

const DetalheModeloRegiaoList = ({ data }) => {
  const width = 100 / (data.regioes.length + 1);

  const classes = useStyles({ width });

  return (
    <div className={classes.container}>
      <div className={`${classes.item} ${classes.title}`}>
        {data.modelo}
      </div>
      {(Array.isArray(data.regioes) ? data.regioes : []).map((r, i) => (
        <div className={classes.item} key={i}>
          {r.total}
        </div>
      ))}
    </div>
  );
};

DetalheModeloRegiaoList.propTypes = {
  data: PropTypes.object,
};

DetalheModeloRegiaoList.defaultProps = {
  data: [],
};

export default DetalheModeloRegiaoList;
