import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import Modal from 'common/layout/modal';
import { Box } from '@mui/material';
import colors from 'assets/styles/colors';
import { ModalComunicados } from '../../../redux/enums';
import ComunicadoModalStatusBar from './views/comunicadoModalStatusBar';
import CriarComunicados from './views/criarComunicado';
import PreviewComunicado from './views/previewComunicado';
import ModalFooter from './views/modalFooter';

import './comunicadosModal.scss';

const ComunicadosModal = ({
  template, setKey, resetStore,
  getBrands, isLoading, closeModal,
}) => {
  useEffect(() => {
    getBrands();
    setKey(v4());
    return () => { resetStore(); };
  }, [resetStore, setKey, getBrands]);

  return (
    <Modal
      disableCloseButton={isLoading}
      closeModal={closeModal}
      width="764px"
      height="601px"
    >
      <div className="comunicados__modal__content">
        <div className="comunicados__modal__content__header">
          <div className="comunicados__modal__content__header_title">
            Novo Comunicado
          </div>
          <div className="comunicados__modal__content__header_status">
            <ComunicadoModalStatusBar />
          </div>
        </div>
        <Box width="100%" borderBottom={`1px solid ${colors.secundary_color_200}`} />
        <div className="comunicados__modal__content__body">
          {template === ModalComunicados.edicaoComunicados
            ? <CriarComunicados /> : <PreviewComunicado />}
        </div>
        <Box width="100%" borderBottom={`1px solid ${colors.secundary_color_200}`} />
        <div className="comunicados__modal__content__footer">
          <ModalFooter />
        </div>
      </div>
    </Modal>
  );
};

ComunicadosModal.propTypes = {
  template: PropTypes.string,
  setKey: PropTypes.func,
  resetStore: PropTypes.func,
  getBrands: PropTypes.func,
  isLoading: PropTypes.bool,
  closeModal: PropTypes.func,
};

ComunicadosModal.defaultProps = {
  template: ModalComunicados.edicaoComunicados,
  setKey: () => {},
  resetStore: () => {},
  getBrands: () => {},
  isLoading: false,
  closeModal: () => {},
};

export default ComunicadosModal;
