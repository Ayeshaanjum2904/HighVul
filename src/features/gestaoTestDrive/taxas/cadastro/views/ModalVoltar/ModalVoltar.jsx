import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Modal from 'common/layout/modal';

import WarningSvg from 'assets/icons/warning-color';
import Button from 'common/controls/button';
import colors from 'assets/styles/colors';

import './ModalVoltar.scss';

const ModalVoltar = ({
  setModalOpen,
}) => {
  const history = useHistory();

  return (
    <Modal
      data-cy="modal-voltar"
      closeModal={setModalOpen}
      width="46,16%"
      height="200px"
    >
      <div
        className="taxas__modal__container"
        data-cy="taxas-modal-container"
      >
        <div className="taxas__modal__title">
          <WarningSvg width="25px" height="25px" fill={colors.error_color_300} />
          <span>Deseja sair de cadastro de nova taxa?</span>
        </div>
        <div className="taxas__modal__subtitle">
          As modificações de novo cadastro de taxa serão perdidas caso não sejam salvas.
        </div>
        <div className="taxas__modal__footer">
          <div className="taxas__modal__footer_voltar">
            <Button
              data-cy="button-cancelar"
              color="dark_gray_border"
              onClick={() => { setModalOpen(); }}
            >
              Cancelar
            </Button>
          </div>
          <div className="taxas__modal__footer_cancelar">
            <Button
              data-cy="button-sair"
              color="new-gray"
              onClick={() => { history.replace('/testdrive/taxas/historico'); }}
            >
              Sair
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

ModalVoltar.propTypes = {
  setModalOpen: PropTypes.func,
};

ModalVoltar.defaultProps = {
  setModalOpen: () => {},
};

export default ModalVoltar;
