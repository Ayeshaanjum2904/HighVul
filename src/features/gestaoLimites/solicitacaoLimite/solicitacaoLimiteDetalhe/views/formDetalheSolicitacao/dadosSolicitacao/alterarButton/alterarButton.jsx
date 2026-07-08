import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    marginTop: '4px',
    textDecorationLine: 'underline',
    color: colors.primary_color_600,
    fontSize: '14px',
    cursor: 'pointer',
    outline: 'none',
  },
});

const AlterarButton = ({ setAlteracaoValor }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.container}
      onClick={() => setAlteracaoValor()}
      role="row"
      tabIndex={0}
    >
      Alterar valor
    </div>
  );
};

AlterarButton.propTypes = {
  setAlteracaoValor: PropTypes.func,
};
AlterarButton.defaultProps = {
  setAlteracaoValor: () => {},
};

export default AlterarButton;
