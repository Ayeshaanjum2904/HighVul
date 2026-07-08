import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';
import List, { ListContent } from 'common/layout/list';
import { formatNomeConcessionaria } from 'utils/format';
import DadosConcessionaria from './dadosConcessionaria';
import DadosJeepBank from './dadosJeepbank';

import './previewConcessionariaModal.scss';

const PreviewConcessionariaModal = ({
  closeModal, nomeConcessionaria, isLoading, isError,
  getDetalheConcessionaria, isModalDetalheOpen,
}) => {
  useEffect(() => {
    getDetalheConcessionaria();
  }, [isModalDetalheOpen, getDetalheConcessionaria]);

  return (
    <Modal
      disableCloseButton={isLoading}
      closeModal={closeModal}
      width="1000px"
      height="600px"
    >
      <div className="grupos__concessionarias-preview-modal__container">
        <div className="grupos__concessionarias-preview-modal__title">
          {formatNomeConcessionaria(nomeConcessionaria)}
        </div>
        <div className="grupos__concessionarias-preview-modal__content">
          <List
            isLoading={isLoading}
            isError={isError}
          >
            <ListContent>
              <DadosConcessionaria />
              <DadosJeepBank />
            </ListContent>
            <ListContent type="error">
              Ocorreu um erro ao carregar os detalhes da concessionária.
            </ListContent>
          </List>
        </div>
      </div>
    </Modal>
  );
};

PreviewConcessionariaModal.propTypes = {
  closeModal: PropTypes.func,
  nomeConcessionaria: PropTypes.string,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  getDetalheConcessionaria: PropTypes.func,
  isModalDetalheOpen: PropTypes.bool,
};

PreviewConcessionariaModal.defaultProps = {
  closeModal: () => {},
  nomeConcessionaria: null,
  isLoading: false,
  isError: false,
  getDetalheConcessionaria: () => {},
  isModalDetalheOpen: false,
};

export default PreviewConcessionariaModal;
