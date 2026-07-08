import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';

import Button from 'common/controls/button';

import './botaoPublicar.scss';

const BotaoPublicar = ({ onClick, isLoading }) => (
  <Button
    onClick={() => onClick()}
    isLoading={isLoading}
    className="comunicados__modal__botao-publicar"
    mixpanelTarget="Publicar Documentos"
    mixpanelPage={trackedProperties.comunicadosPage}
  >
    Publicar
  </Button>
);

BotaoPublicar.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

BotaoPublicar.defaultProps = {
  onClick: () => {},
  isLoading: false,
};

export default BotaoPublicar;
