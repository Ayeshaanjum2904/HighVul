import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';

const useStyles = makeStyles({
  button: {
    width: '100%',
    height: '40px',
  },
});

const AdicionarGrupoButton = ({ openModal }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={openModal}
      className={classes.button}
      mixpanelTarget="Criar novo grupo"
      mixpanelPage={trackedProperties.gruposPage}
    >
      Novo grupo
    </Button>
  );
};

AdicionarGrupoButton.propTypes = {
  openModal: PropTypes.func,
};

AdicionarGrupoButton.defaultProps = {
  openModal: () => {},
};

export default AdicionarGrupoButton;
