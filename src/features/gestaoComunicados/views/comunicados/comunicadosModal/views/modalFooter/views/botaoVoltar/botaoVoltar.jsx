import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';

import './botaoVoltar.scss';

const BotaoVoltar = ({ disabled, onClick }) => (
  <Button
    onClick={() => onClick()}
    className="comunicados__modal__botao-voltar"
    color="new-gray"
    disabled={disabled}
  >
    Voltar
  </Button>
);

BotaoVoltar.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

BotaoVoltar.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default BotaoVoltar;
