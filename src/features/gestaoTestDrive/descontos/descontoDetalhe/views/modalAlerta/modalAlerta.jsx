import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';
import AlertIcon from 'assets/icons/alert-2';
import ErrorList from './views/errorList';
import RevisaoButton from './views/revisaoButton';

import './modalAlerta.scss';

const ModalAlerta = ({
  closeModal,
}) => (
  <Modal
    closeModal={closeModal}
    width="740px"
    height="550px"
    color="white"
  >
    <div className="descontos-details__modal-error__content">
      <div className="descontos-details__modal-error__header" />
      <AlertIcon className="descontos-details__modal-error__icon" />
      <div className="descontos-details__modal-error__body">
        <div className="descontos-details__modal-error__body__message">
          Atenção ao cadastrar condição à vista!
          <span>
            Já existe uma DVE cadastrada para esse período de vigência.
            Revise os dados da condição ou faça a edição da condição já existente.
          </span>
        </div>
        <div className="descontos-details__modal-error__body__list">
          <ErrorList />
        </div>
      </div>

      <div className="descontos-details__modal-error__footer">
        <RevisaoButton />
      </div>
    </div>
  </Modal>
);

ModalAlerta.propTypes = {
  closeModal: PropTypes.func,
};

ModalAlerta.defaultProps = {
  closeModal: () => {},
};

export default ModalAlerta;
