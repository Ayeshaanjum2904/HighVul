import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';
import { safeConcat } from 'utils/format';
import FormDetalheSolicitacao from './views/formDetalheSolicitacao';
import SolicitacaoModalFooter from './views/solicitacaoModalFooter';
import StatusBarSolicitacao from './views/statusBarSolicitacao';
import InputComentario from './views/inputComentario';
import TimelineSolicitacao from './views/timelineSolicitacao';
import CardDetalhe from './views/cardDetalhe';
import StatusErrorModal from './views/statusErrorModal';

import './solicitacaoLimiteModal.scss';

const SolicitacaoLimiteModal = ({
  solicitacaoId, closeModal, isLoadingUpdate, isLoadingCancel, statusErrorModalOpen,
}) => (
  <>
    <Modal
      disableCloseButton={isLoadingUpdate || isLoadingCancel}
      closeModal={closeModal}
    >
      <div className="solicitacoes__modal__container">
        <div className="solicitacoes__modal__content">
          <div className="solicitacoes__modal__header">
            <div className="solicitacoes__modal__header_title">
              {`Pedido ${safeConcat('#', solicitacaoId)}`}
            </div>
            <div className="solicitacoes__modal__header_status-bar">
              <StatusBarSolicitacao />
            </div>
          </div>

          <div className="solicitacoes__modal__body">
            <FormDetalheSolicitacao />
          </div>

          <div className="solicitacoes__modal__footer">
            <SolicitacaoModalFooter />
          </div>
        </div>
        <div className="solicitacoes__modal__sidebar">
          <div className="solicitacoes__modal__sidebar_detalhe">
            <CardDetalhe />
          </div>
          <div className="solicitacoes__modal__sidebar_timeline">
            <TimelineSolicitacao />
          </div>
          <div className="solicitacoes__modal__sidebar_enviar">
            <InputComentario />
          </div>
        </div>
      </div>
    </Modal>
    {statusErrorModalOpen ? (<StatusErrorModal />) : null}
  </>
);

SolicitacaoLimiteModal.propTypes = {
  closeModal: PropTypes.func,
  solicitacaoId: PropTypes.any,
  isLoadingUpdate: PropTypes.bool,
  isLoadingCancel: PropTypes.bool,
  statusErrorModalOpen: PropTypes.bool,
};

SolicitacaoLimiteModal.defaultProps = {
  closeModal: () => {},
  solicitacaoId: '',
  isLoadingUpdate: false,
  isLoadingCancel: false,
  statusErrorModalOpen: false,
};

export default SolicitacaoLimiteModal;
