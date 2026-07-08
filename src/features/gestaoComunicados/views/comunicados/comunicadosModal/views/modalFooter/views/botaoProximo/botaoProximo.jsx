import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';

import './botaoProximo.scss';

const BotaoProximo = ({ onClick, disabled }) => (
  <Button
    onClick={() => onClick()}
    disabled={disabled}
    className="comunicados__modal__botao-proximo"
    color="new-gray"
  >
    Próximo
  </Button>
);

BotaoProximo.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

BotaoProximo.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default BotaoProximo;
