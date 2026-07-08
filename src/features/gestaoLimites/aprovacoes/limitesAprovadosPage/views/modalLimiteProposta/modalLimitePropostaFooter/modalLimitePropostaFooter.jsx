import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './modalLimitePropostaFooter.scss';
import Button from 'common/controls/button';
import SendIcon from 'assets/icons/send';
import _ from 'lodash';
import AlertFilledIcon from 'assets/icons/alert-filled';
import colors from 'assets/styles/colors';
import NewButton from 'common/controls/newButton/newButton';

const ModalLimitePropostaFooter = ({
  handleClose, enviarProposta, idLimite,
  status, modificado, opcaoEscolhida, changeStatusSisgar,
  openPopperSave, condicaoModificada, isLiberadoDealer,
}) => {
  const [openPopper, setOpenPopper] = useState(false);

  useEffect(() => {
    if (openPopperSave) {
      setOpenPopper(false);
    }
  }, [openPopperSave]);

  useEffect(() => {
    setOpenPopper(condicaoModificada);
  }, [condicaoModificada]);

  const handleAction = (actionType) => {
    if (!condicaoModificada) {
      enviarProposta(idLimite, actionType);
      handleClose();
    }
  };

  const handleReter = () => {
    handleAction('aprovacao_retida');
  };

  const handleEnviar = () => {
    handleAction('aguardando_aprovacao_dealer');
  };
  const handleChangeStatus = () => {
    changeStatusSisgar();
    handleClose();
  };

  const renderButtonReter = () => (
    <NewButton
      className="dark_gray_border"
      preventOnClick={openPopper}
      onClick={handleReter}
      alertCardTitle="É necessário salvar a condição antes de prosseguir com a ação"
      icone={<AlertFilledIcon width="8" height="8" />}
      colorBase={colors.error_color_400}
      widthCard="395px"
    >
      <span>
        Reter aprovação
      </span>
    </NewButton>
  );

  const renderButtonLiberar = () => (
    <NewButton
      className="dark_green"
      preventOnClick={openPopper}
      onClick={handleEnviar}
      alertCardTitle="É necessário salvar a condição antes de prosseguir com a ação"
      icone={<AlertFilledIcon width="8" height="8" />}
      colorBase={colors.error_color_400}
      widthCard="395px"
    >
      <div className="modal-limite-proposta__botao-enviar-wrapper">
        <SendIcon />
        <span>Liberar para dealer</span>
      </div>
    </NewButton>

  );

  const renderButtons = () => {
    if (_.isEmpty(modificado) && (status === 'Liberar para dealer' || !isLiberadoDealer)) {
      return (
        <>
          {renderButtonReter()}
          {renderButtonLiberar()}
        </>
      );
    }
    if (_.isEmpty(modificado) && (status === 'aprovacao_retida')) {
      return (
        renderButtonLiberar()
      );
    }
    if (_.isEmpty(modificado) && (status === 'aguardando_aprovacao_dealer')) {
      return (
        renderButtonReter()
      );
    }
    if (!_.isEmpty(modificado) && (opcaoEscolhida === 'valido')) {
      return (
        <Button
          className="modal-limite-proposta__botao-manter-aprovacao"
          onClick={handleChangeStatus}
          color="dark_gray"
        >
          Manter aprovação
        </Button>
      );
    }

    if (!_.isEmpty(modificado) && (opcaoEscolhida !== 'valido')) {
      return (
        <Button className="modal-limite-proposta__botao-enviar" onClick={handleChangeStatus} color="dark_green">
          <div className="modal-limite-proposta__botao-enviar-wrapper">
            <div className="modal-limite-proposta__botao-enviar-logo">
              <SendIcon />
            </div>
            Enviar atualização
          </div>
        </Button>
      );
    }
    return null;
  };

  return (
    <div className="modal-limite-proposta__footer">
      <div className="modal-limite-proposta__botoes">
        {renderButtons()}
      </div>
    </div>
  );
};

ModalLimitePropostaFooter.propTypes = {
  handleClose: PropTypes.func,
  enviarProposta: PropTypes.func,
  changeStatusSisgar: PropTypes.func,
  idLimite: PropTypes.number,
  status: PropTypes.string,
  openPopperSave: PropTypes.bool,
  condicaoModificada: PropTypes.bool,
  isLiberadoDealer: PropTypes.bool,
  opcaoEscolhida: PropTypes.string,
  modificado: PropTypes.array,
};

ModalLimitePropostaFooter.defaultProps = {
  handleClose: () => {},
  enviarProposta: () => {},
  changeStatusSisgar: () => {},
  idLimite: 0,
  status: '',
  opcaoEscolhida: '',
  openPopperSave: false,
  condicaoModificada: false,
  isLiberadoDealer: false,
  modificado: [],
};

export default ModalLimitePropostaFooter;
