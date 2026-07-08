import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';
import InputNome from '../commonViews/inputNome';
import InputEmail from '../commonViews/inputEmail';
import AddUserButton from '../commonViews/adicionarUsuarioButton';
import AnalistasList from '../commonViews/analistasList';
import ConcluirButton from '../commonViews/concluirButton';

import './updateRegional.scss';

const UpdateRegional = ({
  closeModal, getAnalistas, resetStore, disabled,
}) => {
  useEffect(() => {
    getAnalistas();
    return () => {
      resetStore();
    };
  }, [getAnalistas, resetStore]);
  return (
    <Modal
      disableCloseButton={disabled}
      closeModal={closeModal}
      height="fit-content"
      width="660px"
    >
      <div className="analistas__modal-update__container">
        <div className="analistas__modal-update__container__header">
          <div className="analistas__modal-update__container__header_title">
            Analistas associados
          </div>
          <div className="analistas__modal-update__container__header_subtitle">
            Associe um ou mais analistas de rede a essa regional
          </div>
        </div>
        <div className="analistas__modal-update__container__list">
          <AnalistasList />
        </div>
        <div className="analistas__modal-update__container__input">
          <div className="analistas__modal-update__container__input_nome">
            <InputNome />
          </div>
          <div className="analistas__modal-update__container__input_email">
            <InputEmail />
          </div>
          <div className="analistas__modal-update__container__input_button">
            <AddUserButton />
          </div>
        </div>
        <div className="analistas__modal-update__container__footer">
          <ConcluirButton />
        </div>
      </div>
    </Modal>
  );
};

UpdateRegional.propTypes = {
  closeModal: PropTypes.func,
  getAnalistas: PropTypes.func,
  resetStore: PropTypes.func,
  disabled: PropTypes.bool,
};

UpdateRegional.defaultProps = {
  closeModal: () => {},
  getAnalistas: () => {},
  resetStore: () => {},
  disabled: false,
};

export default UpdateRegional;
