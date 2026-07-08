import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import MenuDropdown from 'common/controls/menuDropdown/menuDropdown';
import AlertModalInput from 'common/layout/alertModalInput';
import AlertFilledIcon from 'assets/icons/alert-filled';
import { getUserActions } from '../../../helpers/menuActions';

const LimiteActions = memo(({
  limite, enviarProposta, permissionList, isLoadingAlertModal, isErrorAlertModal,
  salvarCancelamentoMotivo, closeModal, iconProps, disabled, salvarJustificativa,
}) => {
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [motivo, setMotivo] = useState('');
  const [documentoAnexo, setDocumentoAnexo] = useState(false);
  const [tipoModal, setTipoModal] = useState(null);
  const [actionStatusModal, setActionStatusModal] = useState(null);

  const isStatusPendente = limite?.statusLimite === 'Pendente';
  const showJustificativaModal = !limite?.isAceitaDealer && !limite?.isLimiteJustificado;

  const handleSalvarMotivoCancelamento = async () => {
    setOpenAlertModal(false);
    if (isStatusPendente) {
      if (await salvarCancelamentoMotivo(limite?.idLimite, documentoAnexo, motivo)) closeModal();
    } else {
      await enviarProposta(limite?.idLimite, 'aprovacao_cancelada', motivo);
    }
    setMotivo('');
    setDocumentoAnexo(false);
  };

  const handleSalvarJustificativa = async () => {
    const motivoWithLineBreaks = motivo.replace(/\n/g, '<br />');
    setOpenAlertModal(false);
    salvarJustificativa(limite?.idLimite, actionStatusModal, motivoWithLineBreaks);
    closeModal();
    setMotivo('');
  };

  const statusSemJustificativa = [
    'Aprovação finalizada',
    'Cancelar aprovação',
    'Reter aprovação',
    'Liberar para dealer',
  ];

  const handleMudancaStatus = async (statusValue, statusLabel) => {
    if (permissionList.isGestaoFinanciamentoRede
      && !statusSemJustificativa.includes(statusLabel)
      && showJustificativaModal) {
      setActionStatusModal({ statusValue, statusLabel });
      setOpenAlertModal(true);
      setTipoModal('justificativa');
    } else {
      enviarProposta(limite?.idLimite, statusValue);
    }
  };

  const options = getUserActions(
    permissionList,
    limite?.statusLimite,
    limite?.isLiberadoDealer,
    (statusValue, statusLabel) => handleMudancaStatus(statusValue, statusLabel),
    () => {
      setOpenAlertModal(true);
      setTipoModal('cancelamento');
    },
  );

  const propsModal = {
    openAlertModalInput: openAlertModal,
    setOpenAlertModalInput: setOpenAlertModal,
    inputValue: motivo,
    setInputValue: setMotivo,
    colorBase: 'rgba(245, 142, 134, 0.08)',
    icone: <AlertFilledIcon width="8" height="8" />,
  };

  if (tipoModal === 'cancelamento') {
    Object.assign(propsModal, {
      title: 'Deseja cancelar esta aprovação?',
      subtitle: 'Para prosseguir com a ação é necessário informar o motivo do cancelamento da aprovação selecionada.',
      alertCardTitle: 'É necessário inserir um motivo de cancelamento.',
      placeholder: 'Insira o motivo do cancelamento (obrigatório)*',
      buttonAction: handleSalvarMotivoCancelamento,
      inputDocumento: isStatusPendente,
      documentoValue: documentoAnexo,
      setDocumentoValue: setDocumentoAnexo,
      isLoading: isLoadingAlertModal,
      isError: isErrorAlertModal,
    });
  } else if (tipoModal === 'justificativa') {
    Object.assign(propsModal, {
      title: 'Justificativa',
      subtitle: 'Essa aprovação ainda não foi aceita pelo dealer, para prosseguir com a ação é necessário informar a justificativa.',
      alertCardTitle: 'A justificativa é obrigatória.',
      placeholder: 'Insira a justificativa (obrigatório) *',
      buttonAction: handleSalvarJustificativa,
      textRedButton: 'Confirmar',
    });
  }

  return (
    <>
      <MenuDropdown
        color={iconProps.color}
        iconSize={iconProps.size}
        options={permissionList.isGestaoJuridico ? [] : options}
        disabledMenu={disabled}
        direction="right"
      />
      {openAlertModal && (
        <AlertModalInput
          {...propsModal}
        />
      )}
    </>
  );
});

LimiteActions.propTypes = {
  limite: PropTypes.object.isRequired,
  enviarProposta: PropTypes.func.isRequired,
  permissionList: PropTypes.object.isRequired,
  isLoadingAlertModal: PropTypes.bool,
  isErrorAlertModal: PropTypes.bool,
  salvarCancelamentoMotivo: PropTypes.func,
  closeModal: PropTypes.func,
  iconProps: PropTypes.shape({
    size: PropTypes.number,
    color: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  salvarJustificativa: PropTypes.func,
};

LimiteActions.defaultProps = {
  isLoadingAlertModal: false,
  isErrorAlertModal: false,
  salvarCancelamentoMotivo: () => {},
  closeModal: () => {},
  iconProps: { size: undefined, color: undefined },
  disabled: false,
  salvarJustificativa: () => {},
};

export default LimiteActions;
