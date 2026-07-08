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
  page, updateCondicao, createCondicao, isLoading, disabled, onCancel,
}) => {
  const classes = useStyles();

  const getButtonAction = () => {
    if (page === Pages.condicoesCreate || page === Pages.condicoesDuplicate) {
      return () => createCondicao();
    }
    return () => updateCondicao();
  };

  const getButtonText = () => {
    if (page === Pages.condicoesCreate) return 'Cadastrar condição comercial';
    if (page === Pages.condicoesDuplicate) return 'Duplicar condição comercial';
    return 'Atualizar condição comercial';
  };

  const getMixpanelTarget = () => {
    if (page === Pages.condicoesCreate) return 'Criar nova condição';
    if (page === Pages.condicoesDuplicate) return 'Duplicar condição comercial';
    return 'Atualizar condição';
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
        mixpanelPage={trackedProperties.condicoesPage}
      >
        {getButtonText()}
      </Button>
    </div>
  );
};

ActionButton.propTypes = {
  page: PropTypes.string,
  updateCondicao: PropTypes.func,
  createCondicao: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  onCancel: PropTypes.func,
};

ActionButton.defaultProps = {
  page: null,
  updateCondicao: () => {},
  createCondicao: () => {},
  isLoading: false,
  disabled: false,
  onCancel: () => {},
};

export default ActionButton;
