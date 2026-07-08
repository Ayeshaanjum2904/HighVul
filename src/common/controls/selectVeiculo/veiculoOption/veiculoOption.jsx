import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import MarcaBadge from 'common/views/logoMarca';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    alignItems: 'center',
    padding: '3px 0px 3px 16px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

  },
  text: {
    fontSize: '14px',
    lineHeight: '24px',
    color: '#555770',
  },
  icon: {
    marginRight: '10px',
  },
});

const VeiculoOption = ({ veiculo }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {veiculo.marca !== null
          ? (
            <div className={classes.icon}>
              <MarcaBadge marca={veiculo.marca} />
            </div>
          ) : null}
        <div className={classes.text}>
          {veiculo.text}
        </div>
      </div>
    </div>
  );
};

VeiculoOption.propTypes = {
  veiculo: PropTypes.object,
};

VeiculoOption.defaultProps = {
  veiculo: null,
};

export default VeiculoOption;
