import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';
import InputNome from '../commonViews/inputNome';
import InputEmail from '../commonViews/inputEmail';
import AddUserButton from '../commonViews/adicionarUsuarioButton';
import GerentesList from '../commonViews/gerentesList';
import ConcluirButton from '../commonViews/concluirButton';
import SelectMarca from './selectMarca';
import SelectRegional from './selectRegional';

import './insertRegional.scss';

const InsertRegional = ({
  closeModal, resetStore, disabled, getRegionais,
  getMarcas,
}) => {
  useEffect(() => {
    getRegionais();
    getMarcas();
    return () => {
      resetStore();
    };
  }, [resetStore, getRegionais, getMarcas]);

  return (
    <Modal
      disableCloseButton={disabled}
      closeModal={closeModal}
      height="fit-content"
      width="660px"
    >
      <div className="gerentes__modal-insert__container">
        <div className="gerentes__modal-insert__container__header">
          Adicionar nova regional
        </div>
        <div className="gerentes__modal-insert__container__select">
          <SelectRegional />
          <SelectMarca />
        </div>
        <div className="gerentes__modal-insert__container__list">
          <GerentesList />
        </div>
        <div className="gerentes__modal-insert__container__input">
          <div className="gerentes__modal-insert__container__input_nome">
            <InputNome />
          </div>
          <div className="gerentes__modal-insert__container__input_email">
            <InputEmail />
          </div>
          <div className="gerentes__modal-insert__container__input_button">
            <AddUserButton />
          </div>
        </div>
        <div className="gerentes__modal-insert__container__footer">
          <ConcluirButton />
        </div>
      </div>
    </Modal>
  );
};

InsertRegional.propTypes = {
  closeModal: PropTypes.func,
  resetStore: PropTypes.func,
  disabled: PropTypes.bool,
  getRegionais: PropTypes.func,
  getMarcas: PropTypes.func,
};

InsertRegional.defaultProps = {
  closeModal: () => {},
  resetStore: () => {},
  getRegionais: () => {},
  getMarcas: () => {},
  disabled: false,
};

export default InsertRegional;
