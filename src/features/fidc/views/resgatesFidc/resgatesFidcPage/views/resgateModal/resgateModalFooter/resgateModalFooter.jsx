import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, FormGroup } from '@material-ui/core';
import resgateService from 'features/fidc/views/resgatesFidc/services/resgateService';
import { AuthStorage } from 'modules/auth/authStorage';
import AlertModal from 'common/layout/alertModal';
import { CustomSwitch } from 'common/controls/customSwitch/customSwitch.styled';
import {
  ButtonContainer, Container, DisableResgate, ButtonCopy,
} from './resgateModalFooter.style';

const ResgateModalFooter = ({
  vigenciaAtiva,
  status,
  updateStatus,
  openCopy,
  setOpenCopy,
  close,
  setPreVisualizacao,
  preVisualizacao,
  form,
  startDate,
  endDate,
  brand,
  setUpdateMessage,
  addSnackbar,
}) => {
  const [switchState, setSwitchState] = useState(status === 'A');
  const [openConfirmacaoModal, setOpenConfirmacaoModal] = useState(false);
  const disabledButtonNext = (startDate === null || endDate === null)
    || form.titulo === null
    || form.textoMensagem === '<p><br></p>';
  const [disableButton, setDisableButton] = useState(false);
  const disableMessage = () => {
    setSwitchState(false);
    updateStatus();
  };

  const handleClick = async () => {
    const dataInicioVigencia = new Date(startDate);
    const dataFimVigencia = new Date(endDate);
    const params = {
      titulo: form.titulo,
      mensagem: form.textoMensagem,
      dataInicioVigencia: dataInicioVigencia.toISOString().substring(0, 10),
      dataFimVigencia: dataFimVigencia.toISOString().substring(0, 10),
      usuario: AuthStorage.getCurrentUser().name,
      brand,
    };
    setDisableButton(true);
    const response = await resgateService.createMessage(params);
    setUpdateMessage(true);
    setDisableButton(false);
    if (response) {
      addSnackbar('Registro publicado com sucesso.', 'success');
    } else {
      addSnackbar('Erro ao publicar mensagem. Por favor, tente novamente.', 'error');
    }
    close();
  };

  const buttonCancel = () => (
    <ButtonCopy
      color="gray"
      onClick={() => close()}
      disabled={!vigenciaAtiva}
      marginRight="10px"
    >
      Cancelar
    </ButtonCopy>
  );

  const buttonStagetPrev = () => (
    <>

      {buttonCancel()}
      <ButtonCopy
        color="new-gray"
        marginRight="10px"
        onClick={() => setPreVisualizacao(false)}
        disabled={!vigenciaAtiva}
      >
        Voltar
      </ButtonCopy>
      <ButtonCopy
        color="new-blue"
        onClick={() => handleClick()}
        disabled={disableButton}
        disableButton={disableButton}
      >
        Salvar alterações
      </ButtonCopy>
    </>
  );

  const buttonStageEdit = () => (
    preVisualizacao ? (
      buttonStagetPrev()
    ) : (
      <>
        {buttonCancel()}
        <ButtonCopy
          color={disabledButtonNext ? 'new-gray' : 'new-blue'}
          onClick={() => setPreVisualizacao(true)}
          disabled={disabledButtonNext}
          disabledButton={disabledButtonNext}
        >
          Próximo
        </ButtonCopy>
      </>
    )
  );

  const renderButton = () => (
    <ButtonContainer>
      {openCopy
        ? (
          buttonStageEdit()
        ) : (
          <ButtonCopy
            color="new-gray"
            onClick={() => setOpenCopy(true)}
            disabled={!vigenciaAtiva}
          >
            Abrir uma cópia
          </ButtonCopy>
        )}
    </ButtonContainer>
  );

  return (
    <Container>
      {!openCopy && (
        <DisableResgate>
          <FormGroup>
            <FormControlLabel
              control={(
                <CustomSwitch
                  checked={switchState}
                  disabled={!switchState}
                  onClick={() => setOpenConfirmacaoModal(true)}
                />
            )}
              label="Desativar a mensagem"
              data-cy="DesativaMensagemSwitch"
            />
          </FormGroup>
        </DisableResgate>
      )}
      {openConfirmacaoModal && (
        <AlertModal
          buttonAction={disableMessage}
          title="Deseja desativar essa mensagem?"
          subtitle="Ela será desativada de todos os canais aos quais pertence, mas você poderá abrir uma cópia e associá-lo novamente se desejar. "
          textRedButton="Desativar"
          openModal={openConfirmacaoModal}
          setOpen={setOpenConfirmacaoModal}
        />
      )}
      {renderButton()}
    </Container>
  );
};

ResgateModalFooter.propTypes = {
  vigenciaAtiva: PropTypes.bool,
  preVisualizacao: PropTypes.bool,
  status: PropTypes.string,
  updateStatus: PropTypes.func,
  openCopy: PropTypes.bool,
  setOpenCopy: PropTypes.func,
  close: PropTypes.func,
  setPreVisualizacao: PropTypes.func,
  form: PropTypes.shape({
    titulo: PropTypes.string,
    textoMensagem: PropTypes.string,
  }),
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  brand: PropTypes.string,
  setUpdateMessage: PropTypes.func,
  addSnackbar: PropTypes.func,
};

ResgateModalFooter.defaultProps = {
  vigenciaAtiva: false,
  preVisualizacao: false,
  status: '',
  openCopy: false,
  form: PropTypes.shape({
    titulo: null,
    textoMensagem: null,
  }),
  startDate: null,
  endDate: null,
  brand: '',
  updateStatus: () => {},
  setPreVisualizacao: () => {},
  setOpenCopy: () => {},
  close: () => {},
  setUpdateMessage: () => {},
  addSnackbar: () => {},
};

export default ResgateModalFooter;
