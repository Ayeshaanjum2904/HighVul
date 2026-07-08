import React from 'react';
import PropTypes from 'prop-types';

import CardModal from 'common/layout/cardModal';
import ContatosModalForm from './views/contatosModalForm';
import Warning from './views/warning';

import './contatosModal.scss';

const ContatosModal = ({
  isLoading, modalInfo,
  id, onSubmit, disableSubmit, openModal, setModalOpen,
}) => (
  <CardModal
    buttonAction={onSubmit}
    title={modalInfo?.title}
    subtitle={modalInfo?.subtitle}
    textGreenButton={modalInfo?.button}
    openModal={openModal}
    setOpen={setModalOpen}
    confirmClose={modalInfo?.confirmClose}
    closeOnSubmit={false}
    isLoadingSubmit={isLoading}
    disableClose={isLoading}
    disableSubmit={disableSubmit}
    alertTitle={modalInfo?.alertTitle}
    alertSubtitle={modalInfo?.alertSubtitle}
    color="dark_gray_border"
  >
    <div className="contatos__modal__content">
      <div className="contatos__modal__body">
        <ContatosModalForm isEditar={!!id} />
        {id !== null ? <Warning /> : null}
      </div>
    </div>
  </CardModal>
);

ContatosModal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  modalInfo: PropTypes.object,
  id: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  disableSubmit: PropTypes.bool.isRequired,
  openModal: PropTypes.bool,
  setModalOpen: PropTypes.func,
};

ContatosModal.defaultProps = {
  modalInfo: null,
  id: null,
  openModal: false,
  setModalOpen: () => {},
};

export default ContatosModal;
