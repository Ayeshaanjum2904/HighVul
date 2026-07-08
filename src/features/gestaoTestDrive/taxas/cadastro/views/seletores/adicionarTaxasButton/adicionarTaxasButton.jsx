import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import IconAdd from '@material-ui/icons/Add';
import { trackedProperties } from 'modules';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  button: {
    width: '100%',
    height: '40px',
    margin: '20px 0 0 5px',
    padding: '0 16px',
    color: 'white',
  },
  icon: {
    marginRight: '10px',
  },
});

const AdicionarTaxasButton = ({ disabled, setFormOpen }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Button
      onClick={() => {
        history.replace('/testdrive/taxas/cadastro/formulario');
        setFormOpen(true);
      }}
      className={classes.button}
      mixpanelTarget="Criar nova Taxas"
      mixpanelPage={trackedProperties.cadastroTaxas}
      disabled={disabled}
      color="new-gray"
    >
      <IconAdd
        className={classes.icon}
      />
      Adicionar nova taxa
    </Button>
  );
};

AdicionarTaxasButton.propTypes = {
  setFormOpen: PropTypes.func,
  disabled: PropTypes.bool,
};

AdicionarTaxasButton.defaultProps = {
  setFormOpen: () => {},
  disabled: true,
};

export default AdicionarTaxasButton;
