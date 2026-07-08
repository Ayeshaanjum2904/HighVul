import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { Mixpanel, trackedProperties } from 'modules';

import './cadastrarButton.scss';

const CadastrarButton = ({ onClick }) => (
  <Button
    className="comunicados-page__cadastro-button"
    onClick={() => {
      onClick();
      Mixpanel.trackButtonClick(trackedProperties.comunicadosPage, 'cadastroComunicado');
    }}
  >
    Cadastrar novo comunicado
  </Button>
);

CadastrarButton.propTypes = {
  onClick: PropTypes.func,
};

CadastrarButton.defaultProps = {
  onClick: () => {},
};

export default CadastrarButton;
