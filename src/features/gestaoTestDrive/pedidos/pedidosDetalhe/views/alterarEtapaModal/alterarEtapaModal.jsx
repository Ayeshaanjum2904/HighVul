import React from 'react';
import PropTypes from 'prop-types';
import CardModal from 'common/layout/cardModal';

import _ from 'lodash';

const AlterarEtapaModal = ({
  setOpenModalAlterar, openModalAlterar, submitAlterarEtapa,
  etapaDesejada, titleModal, subtitleModal, icone, children,
}) => (
  <CardModal
    setOpen={setOpenModalAlterar}
    openModal={openModalAlterar}
    title={titleModal}
    icone={icone}
    subtitle={subtitleModal}
    textGreenButton="Confirmar alteração"
    alertTitle="Deseja sair de alterar etapa do pedido?"
    alertSubtitle="A alteração selecionada não foi confirmada. Caso queira confirmar, clique em voltar e confirme a seleção."
    buttonAction={() => submitAlterarEtapa(etapaDesejada)}
    disableSubmit={_.isEmpty(etapaDesejada)}
    confirmClose={!_.isEmpty(etapaDesejada)}
    width="523px"
    buttonWidth="100%"
    titleSize="16px"
    color="dark_gray_border"
    colorGreenButton="new-gray"
  >
    {children}
  </CardModal>
);

AlterarEtapaModal.propTypes = {
  setOpenModalAlterar: PropTypes.func,
  openModalAlterar: PropTypes.bool,
  submitAlterarEtapa: PropTypes.func,
  etapaDesejada: PropTypes.object,
  titleModal: PropTypes.string,
  subtitleModal: PropTypes.string,
  icone: PropTypes.element,
  children: PropTypes.element,
};

AlterarEtapaModal.defaultProps = {
  setOpenModalAlterar: () => {},
  openModalAlterar: false,
  submitAlterarEtapa: () => {},
  etapaDesejada: {},
  titleModal: '',
  subtitleModal: '',
  icone: null,
  children: null,
};

export default AlterarEtapaModal;
