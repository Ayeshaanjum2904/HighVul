import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';
import { safeConcat } from 'utils/format';

import SnackbarList from 'common/snackbarList';
import QuestionMark from 'assets/icons/question-mark';
import AlertFilledIcon from 'assets/icons/alert-filled';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PedidoStatusBar from './views/pedidoStatusBar';
import FormDetalhePedido from './views/formDetalhePedido';
import PedidosModalFooter from './views/pedidosModalFooter';
import CardResumo from './views/cardResumo';
import StatusErrorModal from './views/statusErrorModal';
import TimelinePedidos from './views/timelinePedidos';
import SendMessage from './views/inputComentario';
import CancelarPedidoModal from './views/cancelarPedidoModal';
import AlterarEtapaModal from './views/alterarEtapaModal';

import './pedidosModal.scss';
import AlterarEtapaSelect from './views/alterarEtapaModal/alterarEtapaSelect';

const renderStatus = (status, statusList) => {
  const filteredStatus = statusList.find((item) => item.value === status);
  return filteredStatus ? filteredStatus.text : null;
};
const PedidosModal = ({
  pedidoId, closeModal, isLoading,
  statusErrorModalOpen, isLoadingSendComentario,
  snackbarErrors, onSnackbarClose, isEmpty, etapaIsError, status, statusList,
}) => {
  const subtitle = 'Ao retornar o pedido para uma etapa anterior, os dados inseridos anteriormente serão perdidos.';
  const errorMessage = 'Ocorreu um erro ao carregar sua lista de status. Por favor, recarregue a página e tente novamente.';
  const errorEmpty = `A alteração do pedido para  **"${renderStatus(status, statusList)?.toLowerCase()}"** não pode ser realizada pois, não há etapa anterior para redirecionamento.`;

  const renderSubtitle = () => {
    if (etapaIsError || isEmpty) { return null; }
    return subtitle;
  };

  const renderSelect = () => {
    if (etapaIsError) {
      return <span className="error-message">{errorMessage}</span>;
    }
    if (isEmpty) {
      return (
        <span className="empty-message">
          <ReactMarkdown>{errorEmpty}</ReactMarkdown>
        </span>
      );
    }
    return <AlterarEtapaSelect />;
  };

  return (
    <>
      <Modal
        disableCloseButton={isLoading || isLoadingSendComentario}
        closeModal={closeModal}
      >
        <div className="pedidos__modal__container">
          <div className="pedidos__modal__content">
            <div
              className="pedidos__modal__header"
              data-cy="pedidos-modal-header"
            >
              <div className="pedidos__modal__header_subtitle">
                Pedidos
              </div>
              <div className="pedidos__modal__header_title">
                {`Pedido ${safeConcat('#', pedidoId)}`}
              </div>
              <div className="pedidos__modal__header_status-bar">
                <PedidoStatusBar />
              </div>
            </div>

            <div className="pedidos__modal__body">
              <FormDetalhePedido />
            </div>

            <div className="pedidos__modal__footer">
              <PedidosModalFooter />
              <SnackbarList
                snackbarErrors={snackbarErrors}
                onClose={(id) => onSnackbarClose(id)}
              />
            </div>
          </div>

          <div className="pedidos__modal__sidebar">
            <div className="pedidos__modal__detalhes">
              <CardResumo />
            </div>
            <div className="pedidos__modal__mensagem">
              <div className="pedidos__modal__mensagem_timeline">
                <TimelinePedidos />
              </div>
              <div
                className="pedidos__modal__mensagem_enviar"
                data-cy="pedidos__modal__mensagem_enviar"
              >
                <SendMessage />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {statusErrorModalOpen ? (<StatusErrorModal />) : null}
      <CancelarPedidoModal />
      <AlterarEtapaModal
        titleModal={isEmpty ? 'Não é possível alterar a etapa do pedido.' : 'Deseja retornar etapa do pedido?'}
        icone={isEmpty ? <AlertFilledIcon /> : <QuestionMark />}
        subtitleModal={renderSubtitle()}
      >
        <div className="select-alterar">
          {renderSelect()}
        </div>
      </AlterarEtapaModal>
    </>
  );
};

PedidosModal.propTypes = {
  closeModal: PropTypes.func,
  pedidoId: PropTypes.any,
  isLoading: PropTypes.bool,
  statusErrorModalOpen: PropTypes.bool,
  isLoadingSendComentario: PropTypes.bool,
  isEmpty: PropTypes.bool,
  etapaIsError: PropTypes.bool,
  snackbarErrors: PropTypes.array,
  statusList: PropTypes.array,
  onSnackbarClose: PropTypes.func,
  status: PropTypes.string,

};

PedidosModal.defaultProps = {
  closeModal: () => {},
  pedidoId: '',
  isLoading: false,
  statusErrorModalOpen: false,
  isLoadingSendComentario: false,
  isEmpty: false,
  etapaIsError: false,
  snackbarErrors: [],
  statusList: [],
  onSnackbarClose: () => {},
  status: '',
};

export default PedidosModal;
