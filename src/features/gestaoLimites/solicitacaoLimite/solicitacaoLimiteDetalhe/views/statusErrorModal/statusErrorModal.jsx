import React from 'react';
import PropTypes from 'prop-types';

import CloseButton from 'common/layout/modal/closeModalButton';
import WarningSvg from 'assets/icons/warning';

import './statusErrorModal.scss';

const TYPE_INVALID_PROPERTY = 'invalid_property';

const StatusErrorModal = ({
  errors, closeModal,
}) => (
  <div className="solicitacoes__status-error-modal__overlay">
    <div className="solicitacoes__status-error-modal__container">
      <div className="solicitacoes__status-error-modal__close">
        <CloseButton onClick={closeModal} />
      </div>
      <div className="solicitacoes__status-error-modal__header">
        <WarningSvg width="24px" height="24px" />
        <span>Campos inválidos</span>
      </div>
      <div className="solicitacoes__status-error-modal__content">
        É necessário preencher os campos abaixo corretamente para concluir o pedido.
        <div className="solicitacoes__status-error-modal__content-list-container">
          {errors.filter((e) => (e.type === TYPE_INVALID_PROPERTY)).map((e) => (
            <div className="solicitacoes__status-error-modal__content-list-item">
              {`• ${e.message}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

StatusErrorModal.propTypes = {
  errors: PropTypes.array,
  closeModal: PropTypes.func,
};

StatusErrorModal.defaultProps = {
  errors: [],
  closeModal: () => {},
};

export default StatusErrorModal;
