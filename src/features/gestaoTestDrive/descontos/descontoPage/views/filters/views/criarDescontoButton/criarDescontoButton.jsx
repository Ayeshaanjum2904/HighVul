import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';

const useStyles = makeStyles({
  button: {
    width: '312px',
    height: '40px',
  },
});

const CriarDescontoButton = ({ setPage }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={() => setPage()}
      className={classes.button}
      mixpanelTarget="Cadastrar Desconto"
      mixpanelPage={trackedProperties.descontosPage}
    >
      Cadastrar condição à vista
    </Button>
  );
};

CriarDescontoButton.propTypes = {
  setPage: PropTypes.func,
};

CriarDescontoButton.defaultProps = {
  setPage: () => {},
};

export default CriarDescontoButton;
