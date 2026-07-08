import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import MenuDropdown from 'common/controls/menuDropdown/menuDropdown';
import AlertModalInput from 'common/layout/alertModalInput';
import AlertFilledIcon from 'assets/icons/alert-filled';
import { ActionsContainer, OrdemActionsGlobalStyle } from './ordemActions.style';

const OrdemActions = memo(({
  ordem,
  isLoadingAlertModal,
  isErrorAlertModal,
  cancelOrder,
  disabled,
  setModalOrdem,
  setModalVincularCondicao,
  setModalVincularCondicaoAVista,
}) => {
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [justificativa, setJustificativa] = useState('');

  const handleConfirmCancel = async () => {
    setOpenCancelModal(false);
    await cancelOrder(ordem.id, justificativa);
    setJustificativa('');
  };

  const handleCancelClick = () => {
    if (ordem.status === 'Aguardando condições e análise do crédito') {
      setOpenCancelModal(true);
    } else {
      cancelOrder(ordem.id, '');
    }
  };

  const handleEditClick = () => setModalOrdem(ordem);

  const handleVincularClick = () => {
    setModalVincularCondicao(ordem);
  };

  const handleVincularCondicaoAVistaClick = () => {
    setModalVincularCondicaoAVista(ordem);
  };

  const getOptions = () => {
    const options = [];
    if (ordem && !ordem.possuiCartaMes) {
      options.push({ label: 'Inserir Carta do Mês', action: handleEditClick });
    }
    options.push({ label: 'Vincular Condição à Vista', action: handleVincularCondicaoAVistaClick });
    options.push({ label: 'Vincular Condição Comercial', action: handleVincularClick });
    options.push({ label: 'Cancelar Ordem', action: handleCancelClick });
    return options;
  };

  return (
    ordem?.status !== 'Cancelado' && (
      <>
        <OrdemActionsGlobalStyle />
        <ActionsContainer>
          <MenuDropdown
            options={getOptions()}
            iconSize={24}
            disabledMenu={disabled}
            direction="right"
          />
          {openCancelModal && (
            <AlertModalInput
              openAlertModalInput={openCancelModal}
              setOpenAlertModalInput={setOpenCancelModal}
              title="Cancelar Ordem?"
              subtitle="A ordem selecionada será cancelada definitivamente, insira uma justificativa para continuar essa ação."
              alertCardTitle="É necessário inserir uma justificativa de cancelamento."
              placeholder="Insira a justificativa (obrigatório)*"
              inputValue={justificativa}
              setInputValue={setJustificativa}
              buttonAction={handleConfirmCancel}
              colorBase="rgba(245, 142, 134, 0.08)"
              icone={<AlertFilledIcon width="24" height="24" />}
              textRedButton="Salvar"
              isLoading={isLoadingAlertModal}
              isError={isErrorAlertModal}
            />
          )}
        </ActionsContainer>
      </>
    )
  );
});

OrdemActions.propTypes = {
  ordem: PropTypes.object.isRequired,
  isLoadingAlertModal: PropTypes.bool,
  isErrorAlertModal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  cancelOrder: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  setModalOrdem: PropTypes.func.isRequired,
  setModalVincularCondicao: PropTypes.func.isRequired,
  setModalVincularCondicaoAVista: PropTypes.func.isRequired,
};

OrdemActions.defaultProps = {
  isLoadingAlertModal: false,
  isErrorAlertModal: false,
  disabled: false,
};

export default OrdemActions;
