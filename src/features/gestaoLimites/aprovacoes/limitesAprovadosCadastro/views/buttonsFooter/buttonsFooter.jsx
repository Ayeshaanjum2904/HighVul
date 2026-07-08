import { React, useState } from 'react';
import './buttonsFooter.scss';
import { useHistory } from 'react-router-dom';
import NewButton from 'common/controls/newButton/newButton';
import PropTypes from 'prop-types';
import AlertFilledIcon from 'assets/icons/alert-filled';
import colors from 'assets/styles/colors';
import AlertModalInput from 'common/layout/alertModalInput';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

const configuracaoStatus = {
  enviado_para_cadastro: {
    action: {
      dealer: { button: true },
      financiamento: { button: true },
    },
  },
  pendente_documentos: {
    action: {
      dealer: { button: true },
      financiamento: { button: true },
    },
  },
  documentos_enviados_parcialmente: {
    action: {
      dealer: { button: true },
      financiamento: { button: true },
    },
  },
  documentos_atualizados_dealer: {
    action: {
      dealer: { button: true },
      financiamento: { button: true },
    },
  },
  cadastro_atualizado: {
    action: {
      dealer: { button: false },
      financiamento: { button: false },
    },
  },
};

const ButtonsFooter = ({
  cadastroPage, limite, enviarProposta, salvarJustificativa, openForm,
  documentosCadastro, permissionList, uploadDocumento,
}) => {
  const showModalDocumentosPendentes = documentosCadastro.some(
    (doc) => doc?.documentos?.length !== doc?.pessoaDocumentacao?.tipoDocumento?.length,
  );

  const history = useHistory();
  const actions = () => {
    cadastroPage(false);
    history.replace('/limites/aprovacoes/limites-aprovados');
  };

  const [openModalExcecao, setOpenModalExcecao] = useState(false);
  const [motivo, setMotivo] = useState(null);
  const [documento, setDocumento] = useState(null);

  const config = configuracaoStatus?.[limite?.statusLimite];

  const handleActionButton = (status, openModal) => {
    if (openModal) setOpenModalExcecao(true);
    else enviarProposta(limite.idLimite, status, actions);
  };

  const handleActionModal = async () => {
    const motivoWithLineBreaks = motivo.replace(/\n/g, '<br />');
    const file = documento ? await uploadDocumento(documento.file) : documento;
    salvarJustificativa(limite.idLimite, 'cadastro_atualizado', motivoWithLineBreaks, file, actions);
  };

  const condicaoEviarDealer = config?.action?.dealer?.button
    && !permissionList.isGestaoJuridico;
  const condicaoEviarFinanciamento = config?.action?.financiamento?.button
    && !permissionList.isGestaoJuridico;

  return (
    <div className="buttons-footer-documentos">
      <NewButton
        className="dark_gray_border"
        onClick={actions}
      >
        <span>Cancelar</span>
      </NewButton>
      {condicaoEviarDealer && documentosCadastro?.length > 0 && (
        <NewButton
          className={config?.action?.financiamento?.button ? 'gray' : 'dark_green'}
          preventOnClick={openForm}
          onClick={() => handleActionButton('pendente_documentos', false)}
          alertCardTitle="É necessário salvar uma lista antes de prosseguir com o envio para o dealer"
          icone={<AlertFilledIcon width="8" height="8" />}
          widthCard="470px"
          colorBase={colors.error_color_400}
        >
          <span>Enviar para Dealer</span>
        </NewButton>
      )}
      {condicaoEviarFinanciamento && (
        <NewButton
          className="dark_green"
          onClick={() => handleActionButton('cadastro_atualizado', showModalDocumentosPendentes)}
        >
          <span>Enviar para Financiamento Rede</span>
        </NewButton>
      )}
      <AlertModalInput
        openAlertModalInput={openModalExcecao}
        setOpenAlertModalInput={setOpenModalExcecao}
        buttonAction={handleActionModal}
        title="Há documentos pendentes nesta aprovação."
        subtitle="Deseja liberar a aprovação com a documentação incompleta?"
        alertCardTitle="É necessário inserir um motivo para liberar a aprovação."
        colorBase={colors.error_color_300}
        placeholder="Insira o motivo da liberação (obrigatório)*"
        inputValue={motivo}
        setInputValue={setMotivo}
        icone={<AlertFilledIcon width="8" height="8" />}
        iconTitle={HelpRoundedIcon}
        color={colors.primary_color_600}
        textRedButton="Liberar aprovação"
        inputDocumento
        documentoValue={documento}
        setDocumentoValue={setDocumento}
      />
    </div>
  );
};

ButtonsFooter.propTypes = {
  limite: PropTypes.object.isRequired,
  cadastroPage: PropTypes.func,
  enviarProposta: PropTypes.func,
  salvarJustificativa: PropTypes.func,
  uploadDocumento: PropTypes.func,
  openForm: PropTypes.bool,
  documentosCadastro: PropTypes.array,
  permissionList: PropTypes.object,
};

ButtonsFooter.defaultProps = {
  cadastroPage: () => { },
  enviarProposta: () => { },
  salvarJustificativa: () => { },
  uploadDocumento: () => { },
  openForm: false,
  documentosCadastro: [],
  permissionList: null,
};

export default ButtonsFooter;
