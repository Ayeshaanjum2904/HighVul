import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';
import InputNome from '../commonViews/inputNome';
import InputEmail from '../commonViews/inputEmail';
import AddUserButton from '../commonViews/adicionarUsuarioButton';
import GerentesList from '../commonViews/gerentesList';
import ConcluirButton from '../commonViews/concluirButton';

import './updateRegional.scss';

const UpdateRegional = ({
  closeModal, getGerentes, resetStore, disabled,
}) => {
  useEffect(() => {
    getGerentes();
    return () => {
      resetStore();
    };
  }, [getGerentes, resetStore]);
  return (
    <Modal
      disableCloseButton={disabled}
      closeModal={closeModal}
      height="fit-content"
      width="660px"
    >
      <div className="gerentes__modal-update__container">
        <div className="gerentes__modal-update__container__header">
          <div className="gerentes__modal-update__container__header_title">
            Gerentes associados
          </div>
          <div className="gerentes__modal-update__container__header_subtitle">
            Associe um ou mais gerentes de rede a essa regional
          </div>
        </div>
        <div className="gerentes__modal-update__container__list">
          <GerentesList />
        </div>
        <div className="gerentes__modal-update__container__input">
          <div className="gerentes__modal-update__container__input_nome">
            <InputNome />
          </div>
          <div className="gerentes__modal-update__container__input_email">
            <InputEmail />
          </div>
          <div className="gerentes__modal-update__container__input_button">
            <AddUserButton />
          </div>
        </div>
        <div className="gerentes__modal-update__container__footer">
          <ConcluirButton />
        </div>
      </div>
    </Modal>
  );
};

UpdateRegional.propTypes = {
  closeModal: PropTypes.func,
  getGerentes: PropTypes.func,
  resetStore: PropTypes.func,
  disabled: PropTypes.bool,
};

UpdateRegional.defaultProps = {
  closeModal: () => {},
  getGerentes: () => {},
  resetStore: () => {},
  disabled: false,
};

export default UpdateRegional;
