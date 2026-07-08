import React from 'react';
import PropTypes from 'prop-types';

import './buttonSend.scss';
import Button from 'common/controls/button';
import colors from 'assets/styles/colors';
import SendIcon from 'assets/icons/send';
import _ from 'lodash';

const ButtonSend = ({
  enviarProposta,
  textApply,
  fullWidth,
  dataCy,
  selectedIds,
}) => (
  <Button
    className="common__filters__botao-enviar"
    onClick={() => enviarProposta('aguardando_aprovacao_dealer')}
    fullWidth={fullWidth}
    dataCy={dataCy}
    color="dark_green"
    disabled={_.isEmpty(selectedIds)}
  >
    <div className="container-button">
      <SendIcon color={_.isEmpty(selectedIds) ? colors.secundary_color_800 : 'white'} />
      {textApply}
    </div>
  </Button>
);

ButtonSend.propTypes = {
  enviarProposta: PropTypes.func,
  textApply: PropTypes.string,
  fullWidth: PropTypes.bool,
  selectedIds: PropTypes.array,
  dataCy: PropTypes.string,
};

ButtonSend.defaultProps = {
  enviarProposta: () => {},
  textApply: 'Liberar para dealer',
  fullWidth: false,
  selectedIds: [],
  dataCy: null,
};

export default ButtonSend;
