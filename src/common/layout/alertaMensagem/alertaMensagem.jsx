import React from 'react';
import PropTypes from 'prop-types';
import { AlertTriangle } from 'react-feather';
import _ from 'lodash';
import './alertaMensagem.scss';
import colors from 'assets/styles/colors';

const AlertaMensagem = ({ mensagem, subMensagem, breakLine }) => (
  <div
    className="alerta-mensagem__container"
    data-cy="AlertaMensagemContainerSimPag"
  >
    <div className="alerta-mensagem__container__icon">
      <AlertTriangle size={40} stroke={colors.alert_color_200} />
    </div>
    <div className="alerta-mensagem__container__mensagem">
      <span className={breakLine ? 'alerta-mensagem__container__breakLine' : ''}>{mensagem}</span>
      { !_.isEmpty(subMensagem) && !_.isNull(subMensagem) && !_.isUndefined(subMensagem)
        ? (<div className="alerta-mensagem__container__subMensagem">{subMensagem}</div>)
        : null }
    </div>
  </div>
);

AlertaMensagem.propTypes = {
  mensagem: PropTypes.string.isRequired,
  subMensagem: PropTypes.string,
  breakLine: PropTypes.bool,
};

AlertaMensagem.defaultProps = {
  subMensagem: null,
  breakLine: false,
};

export default AlertaMensagem;
