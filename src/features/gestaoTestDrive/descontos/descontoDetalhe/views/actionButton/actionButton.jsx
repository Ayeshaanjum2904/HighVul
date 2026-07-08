import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import NewButton from 'common/controls/newButton/newButton';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';
import { Pages } from '../../../redux/enums';

const useStyles = makeStyles({
  button: {
    width: '246px',
    height: '40px',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
});

const ActionButton = ({
  page, updateDesconto, createDesconto, isLoading, disabled, onCancel,
}) => {
  const classes = useStyles();

  const getButtonAction = () => {
    if (page === Pages.descontosCreate || page === Pages.descontosDuplicate) {
      return () => createDesconto();
    }
    return () => updateDesconto();
  };

  const getButtonText = () => {
    if (page === Pages.descontosCreate) return 'Cadastrar condição';
    if (page === Pages.descontosDuplicate) return 'Duplicar condição à vista';
    return 'Atualizar condição';
  };

  const getMixpanelTarget = () => {
    if (page === Pages.descontosCreate) return 'Criar nova condição à vista';
    if (page === Pages.descontosDuplicate) return 'Duplicar condição à vista';
    return 'Atualizar condição à vista';
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className={classes.buttonContainer}>
      <NewButton
        className="dark_gray_border"
        onClick={handleCancel}
      >
        <span>Cancelar</span>
      </NewButton>
      <Button
        onClick={getButtonAction()}
        isLoading={isLoading}
        className={classes.button}
        disabled={disabled}
        mixpanelTarget={getMixpanelTarget()}
        mixpanelPage={trackedProperties.descontosPage}
      >
        {getButtonText()}
      </Button>
    </div>
  );
};

ActionButton.propTypes = {
  page: PropTypes.string,
  updateDesconto: PropTypes.func,
  createDesconto: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  onCancel: PropTypes.func,
};

ActionButton.defaultProps = {
  page: null,
  updateDesconto: () => {},
  createDesconto: () => {},
  isLoading: false,
  disabled: false,
  onCancel: () => {},
};

export default ActionButton;
