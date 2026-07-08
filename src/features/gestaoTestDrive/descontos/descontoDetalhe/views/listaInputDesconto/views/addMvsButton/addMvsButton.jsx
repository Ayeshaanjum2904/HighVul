import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';

const useStyles = makeStyles({
  button: {
    width: '205px',
    fontSize: '14px',
    lineHeight: '16px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: '8px',
    paddingTop: '2px',
  },
});

const AddMvsButton = ({
  openModal, disabled, isLoading,
}) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => openModal()}
      isLoading={isLoading}
      mixpanelTarget="Abrir modal de seleção de mvs"
      mixpanelPage={trackedProperties.descontosPage}
      disabled={disabled}
    >
      <div className={classes.icon}>
        <AddIcon size="20px" />
      </div>
      Adicionar veículos
    </Button>
  );
};

AddMvsButton.propTypes = {
  openModal: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

AddMvsButton.defaultProps = {
  openModal: () => {},
  disabled: false,
  isLoading: false,
};

export default AddMvsButton;
