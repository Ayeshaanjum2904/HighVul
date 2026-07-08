import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import { getButtonMap } from './makeButtonMap';

import AlterarEtapaButton from './buttons/alterarEtapaButton';
import EnviarIntegracaoButton from './buttons/enviarIntegracaoButton';

import FooterError from './footerError';

import './pedidosModalFooter.scss';

const STATUS_ERRO_INTEGRACAO = 'separacao_erro_integracao';

const getButtons = (buttonMap, currentStatus) => {
  if (!_.isArray(buttonMap)) return null;
  return buttonMap.find((m) => m.status === currentStatus);
};

const PedidosModalFooter = ({
  isError, currentStatus, isErrorComentario, isAVista,
  isPedidoComOrdem, produto, isOrdem, fluxoAntigo,
}) => {
  const buttonMap = getButtonMap(isOrdem, isAVista, fluxoAntigo);
  const buttons = getButtons(buttonMap, currentStatus);
  const produtosCancelamentoRestrito = ['Janela de Lançamentos', 'Novas Concessionárias', 'Novos Veículos'];
  const isPedidoCancelado = currentStatus === 'cancelado';
  const isPedidoPendenteMontadora = currentStatus === 'pendente_montadora';

  const showAlterarEtapaButton = Boolean(buttons
    && !isPedidoComOrdem
    && !isPedidoPendenteMontadora
    && !(isPedidoCancelado && produtosCancelamentoRestrito.includes(produto)));

  const showEnviarIntegracaoButton = currentStatus === STATUS_ERRO_INTEGRACAO;
  return (
    <div
      className="pedidos__modal-footer__container"
      data-cy="pedidos__modal-footer__container"
    >
      <div className="pedidos__modal-footer__error">
        {(isError || isErrorComentario) ? (<FooterError />) : null}
      </div>
      { showAlterarEtapaButton && (
        <RenderIfPermission requireAll={[permissions.pedidos.reverterPedido]}>
          <div>
            <AlterarEtapaButton />
          </div>
        </RenderIfPermission>
      )}

      {showEnviarIntegracaoButton && (
        <div className="pedidos__modal-footer__buttonEnviarIntegracao">
          <EnviarIntegracaoButton />
        </div>
      )}

      <div className="pedidos__modal-footer__button1">
        {buttons?.button1}
      </div>
      <div className="pedidos__modal-footer__button2">
        {buttons?.button2}
      </div>
      <div className="pedidos__modal-footer__button3">
        {buttons?.button3}
      </div>
      <div className="pedidos__modal-footer__buttonSalvar">
        {buttons?.buttonSalvar}
      </div>
    </div>
  );
};

PedidosModalFooter.propTypes = {
  isError: PropTypes.bool,
  isErrorComentario: PropTypes.bool,
  currentStatus: PropTypes.string,
  isAVista: PropTypes.bool,
  isPedidoComOrdem: PropTypes.bool,
  produto: PropTypes.string,
  isOrdem: PropTypes.bool,
  fluxoAntigo: PropTypes.bool,
};

PedidosModalFooter.defaultProps = {
  isError: false,
  currentStatus: null,
  isErrorComentario: false,
  isAVista: false,
  isPedidoComOrdem: false,
  produto: null,
  isOrdem: false,
  fluxoAntigo: false,
};

export default PedidosModalFooter;
