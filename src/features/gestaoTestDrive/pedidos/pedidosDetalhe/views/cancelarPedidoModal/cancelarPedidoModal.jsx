import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

import './cancelarPedidoModal.scss';
import { trackedProperties } from 'modules';
import AlertModal from 'common/layout/alertModal';

const CancelPedidoModal = ({
  openAlertModal, setOpenAlertModal, motivo, updateMotivo,
  cancelPedido, isLoadingCancel, isModalSending, status,
}) => {
  const modalText = status === 'faturado' || status === 'contrato_pago'
    ? { title: 'Deseja cancelar esse contrato?', button: 'Cancelar Contrato' }
    : { title: 'Deseja cancelar esse pedido?', button: 'Cancelar Pedido' };

  return (
    <AlertModal
      openModal={openAlertModal}
      setOpen={setOpenAlertModal}
      buttonAction={() => cancelPedido(motivo)}
      title={modalText.title}
      subtitle="É necessário preencher o motivo desse cancelamento."
      textRedButton={modalText.button}
      disableAction={(motivo?.length ?? 0) < 5 || isModalSending}
      isLoadingAction={isLoadingCancel}
      closeOnSubmit={false}
      mixpanelTarget="Cancelar Pedido"
      mixpanelPage={trackedProperties.pedidosPage}
    >
      <FormInput
        type="text"
        maxRows={2}
        multiline
        value={motivo}
        placeholder="Escrever motivo"
        setValue={(value) => updateMotivo(value)}
      />
    </AlertModal>
  );
};

CancelPedidoModal.propTypes = {
  openAlertModal: PropTypes.bool,
  setOpenAlertModal: PropTypes.func,
  updateMotivo: PropTypes.func,
  cancelPedido: PropTypes.func,
  motivo: PropTypes.string,
  isLoadingCancel: PropTypes.bool,
  isModalSending: PropTypes.bool,
  status: PropTypes.string,
};

CancelPedidoModal.defaultProps = {
  openAlertModal: false,
  setOpenAlertModal: () => {},
  updateMotivo: () => {},
  cancelPedido: () => {},
  motivo: '',
  isLoadingCancel: false,
  isModalSending: false,
  status: '',
};

export default CancelPedidoModal;
