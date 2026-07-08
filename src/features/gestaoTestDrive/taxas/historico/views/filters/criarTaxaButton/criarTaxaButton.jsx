import React from 'react';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  button: {
    width: '100%',
    height: '40px',
  },
});

const CriarTaxaButton = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Button
      onClick={() => { history.replace('/testdrive/taxas/cadastro'); }}
      className={classes.button}
      mixpanelTarget="Cadastrar nova taxa"
      mixpanelPage={trackedProperties.historicoTaxas}
    >
      Cadastrar nova taxa
    </Button>
  );
};

CriarTaxaButton.propTypes = {
};

CriarTaxaButton.defaultProps = {
};

export default CriarTaxaButton;
