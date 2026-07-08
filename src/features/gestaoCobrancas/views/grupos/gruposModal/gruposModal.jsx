import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';

import SendButton from './views/sendButton';
import GruposModalForm from './views/gruposModalForm';

import './gruposModal.scss';

const GruposModal = ({
  isLoading, closeModal, resetStore, getRegionais, getMarcas,
}) => {
  useEffect(() => {
    getRegionais();
    getMarcas();
    return () => {
      resetStore();
    };
  }, [getRegionais, getMarcas, resetStore]);

  return (
    <Modal
      disableCloseButton={isLoading}
      closeModal={closeModal}
      width="800px"
      height="420px"
    >
      <div className="grupos__modal__content">
        <div className="grupos__modal__header">
          <div className="grupos__modal__header_title">
            Novo Grupo
          </div>
          <div className="grupos__modal__header_subtitle">
            Preencha os dados para a criação do novo grupo
          </div>
        </div>
        <div className="grupos__modal__body">
          <GruposModalForm />
        </div>
        <div className="grupos__modal__footer">
          <SendButton />
        </div>
      </div>
    </Modal>
  );
};

GruposModal.propTypes = {
  isLoading: PropTypes.bool,
  closeModal: PropTypes.func,
  getRegionais: PropTypes.func,
  getMarcas: PropTypes.func,
  resetStore: PropTypes.func,
};

GruposModal.defaultProps = {
  isLoading: false,
  closeModal: () => {},
  getRegionais: () => {},
  getMarcas: () => {},
  resetStore: () => {},
};

export default GruposModal;
