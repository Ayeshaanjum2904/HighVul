import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';

import ModelosCadastroInput from './views/modelosCadastroInput';
import ImagemModelo from './views/imagemModelo';
import ModelosCadastroFooter from './views/modelosCadastroFooter';

import './modelosCadastro.scss';

const ModelosCadastro = ({
  closeModal, disabled,
}) => (
  <Modal
    disableCloseButton={disabled}
    closeModal={closeModal}
    width="600px"
    height="571px"
  >
    <div
      className="veiculos__cadastro-modelo-modal__container"
      data-cy="cadastro-modelo-modal"
    >
      <div className="veiculos__cadastro-modelo-modal__header">
        Cadastrar novo modelo
      </div>
      <div className="veiculos__cadastro-modelo-modal__content">
        <ModelosCadastroInput />
        <ImagemModelo />
      </div>
      <div className="veiculos__cadastro-modelo-modal__footer">
        <ModelosCadastroFooter />
      </div>
    </div>

  </Modal>

);

ModelosCadastro.propTypes = {
  closeModal: PropTypes.func,
  disabled: PropTypes.bool,
};

ModelosCadastro.defaultProps = {
  closeModal: () => {},
  disabled: false,
};

export default ModelosCadastro;
