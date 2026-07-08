import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';
import AlertasModalFooter from './views/alertasModalFooter';
import AlertasModalStatusBar from './views/alertasModalStatusBar';
import AlertasModalForm from './views/alertasModalForm';
import AlertasModalPreview from './views/alertasModalPreview';

import modalStatus from './status';

import './alertasModal.scss';

const AlertasModal = ({
  closeModalAlertas, status, isLoading, setModalStatus, resetStore,
}) => {
  useEffect(() => {
    setModalStatus(modalStatus.conteudo);
    return () => { resetStore(); };
  }, [setModalStatus, resetStore]);
  return (
    <Modal
      disableCloseButton={isLoading}
      closeModal={closeModalAlertas}
      width="764px"
      height="95vh"
    >
      <div
        className="alertas__modal__content"
        data-cy="alertar-modal"
      >
        <div className="alertas__modal__header">
          <div
            className="alertas__modal__header_title"
            data-cy="alertas-title"
          >
            Novo Alerta
          </div>
          <div className="alertas__modal__header_status-bar">
            <AlertasModalStatusBar />
          </div>
        </div>

        <div className="alertas__modal__body">
          {status === 'conteudo' ? <AlertasModalForm /> : <AlertasModalPreview />}

        </div>

        <div className="alertas__modal__footer">
          <AlertasModalFooter />
        </div>
      </div>
    </Modal>

  );
};

AlertasModal.propTypes = {
  closeModalAlertas: PropTypes.func.isRequired,
  status: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  setModalStatus: PropTypes.func.isRequired,
  resetStore: PropTypes.func.isRequired,
};

AlertasModal.defaultProps = {
  status: modalStatus.conteudo,
};

export default AlertasModal;
