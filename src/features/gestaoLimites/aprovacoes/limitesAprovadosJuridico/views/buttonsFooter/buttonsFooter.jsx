import { React, useState } from 'react';
import './buttonsFooter.scss';
import { useHistory } from 'react-router-dom';
import NewButton from 'common/controls/newButton/newButton';
import PropTypes from 'prop-types';
import AlertFilledIcon from 'assets/icons/alert-filled';
import colors from 'assets/styles/colors';
import { permissions } from 'modules/auth';
import { hasPermission } from 'modules/auth/authLogic';
import AlertModal from 'common/layout/alertModal';
import _ from 'lodash';
import {
  hasDocComplementaresWithAnexo, isAllDocOriginal,
  allDocComplementaresHasAnexos, hasDocComplementaresWithoutAnexo,
  isAllDocusign, isAllDocusignOrSemCheck,
  isAllDocOriginalOrSemCheck, hasDocFormalizarWithoutAnexo,
  allDocFormalizarHasAnexos, hasDocFormalizarWithAnexo,
} from '../utils/statusConditionsUtils';

const ButtonsFooterJuridico = ({
  cadastroPage, idLimite, enviarProposta, openForm, user, alertModalType,
  listaDocumentosFormalizar, isReadonlyStatus, listaPessoaDocumentacao,
}) => {
  const showModalOnCancel = openForm;
  const history = useHistory();
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const redirectToLimitesAprovados = () => {
    cadastroPage(false);
    history.replace('/limites/aprovacoes/limites-aprovados');
  };

  const handleCloseAlertModal = () => {
    setOpenAlertModal(false);
    redirectToLimitesAprovados();
  };

  const handleOpenAlertModal = () => {
    setOpenAlertModal(true);
  };

  const isButtonEnviarFinanciamentoRede = (
    hasPermission(user, permissions.limitesAprovados.gestaoJuridico)
    && !(hasPermission(user, permissions.limitesAprovados.gestaoFinanciamentoRede))
  );

  const fluxoDocFormalizar = (listDocs) => {
    if (isAllDocOriginalOrSemCheck(listDocs) && !isAllDocOriginal(listDocs)) return 'docs_formalizar_enviados_sem_retorno';

    if (isAllDocusign(listDocs)) return 'assinatura_docusign';

    if (isAllDocusignOrSemCheck(listDocs)) return 'docusing_docs_formalizar_sem_retorno';

    if (hasDocFormalizarWithoutAnexo(listDocs)
     && hasDocFormalizarWithAnexo(listDocs)) return 'docs_formalizar_enviados_parcialmente';

    if (allDocFormalizarHasAnexos(listDocs)) return 'docs_formalizar_atualizado_dealer';

    return 'pendente_docs_formalizar_dealer';
  };

  const fluxoDocComplementares = (listDocs) => {
    if (hasDocComplementaresWithAnexo(listDocs)
      && hasDocComplementaresWithoutAnexo(listDocs)) return 'docs_juridico_enviados_parcialmente';

    if (allDocComplementaresHasAnexos(listDocs)) return 'docs_juridico_atualizado_dealer';

    return 'pendente_docs_juridico_dealer';
  };

  const buttonActionAnaliseFinRede = () => enviarProposta(idLimite, 'analise_financiamento_rede', redirectToLimitesAprovados);

  const buttonActionJuridico = () => enviarProposta(idLimite, 'analise_juridico', redirectToLimitesAprovados);

  const buttonActionEnviarDealer = () => {
    const statusAtualizadoLimite = !_.isEmpty(listaDocumentosFormalizar)
      ? fluxoDocFormalizar(listaDocumentosFormalizar)
      : fluxoDocComplementares(listaPessoaDocumentacao.listaDados);

    return enviarProposta(idLimite, statusAtualizadoLimite, redirectToLimitesAprovados);
  };

  return (
    <>
      <div className="buttons-footer-juridico">
        <NewButton
          className="dark_gray_border"
          onClick={showModalOnCancel ? handleOpenAlertModal : redirectToLimitesAprovados}
        >
          <span>Cancelar</span>
        </NewButton>
        {!isReadonlyStatus && (
          <>
            {(!isButtonEnviarFinanciamentoRede) && (
              <NewButton
                className="gray"
                preventOnClick={openForm}
                onClick={() => buttonActionJuridico()}
                alertCardTitle="É necessário salvar uma lista antes de prosseguir com o envio para o dealer"
                icone={<AlertFilledIcon width="8" height="8" />}
                widthCard="470px"
                colorBase={colors.error_color_400}
              >
                <span>Enviar para juridico</span>
              </NewButton>
            )}
            {isButtonEnviarFinanciamentoRede ? (
              <NewButton
                className="dark_green"
                preventOnClick={openForm}
                onClick={() => (buttonActionAnaliseFinRede())}
                alertCardTitle="É necessário salvar uma lista antes de prosseguir com o envio para o dealer"
                icone={<AlertFilledIcon width="8" height="8" />}
                widthCard="470px"
                colorBase={colors.error_color_400}
              >
                <span>Enviar para financiamento rede</span>
              </NewButton>
            ) : (
              <NewButton
                className="dark_green"
                preventOnClick={openForm}
                onClick={() => (buttonActionEnviarDealer())}
                alertCardTitle="É necessário salvar uma lista antes de prosseguir com o envio para o dealer"
                icone={<AlertFilledIcon width="8" height="8" />}
                widthCard="470px"
                colorBase={colors.error_color_400}
              >
                <span>Enviar para dealer</span>
              </NewButton>
            )}

          </>
        )}
      </div>
      <AlertModal
        title={`Deseja excluir os dados de ${alertModalType}?`}
        subtitle={`As informações inseridas em “${alertModalType}” não foram salvas. Caso clique em excluir os dados serão apagados.`}
        textRedButton="Excluir"
        textGrayButton="Voltar"
        openModal={openAlertModal}
        setOpen={setOpenAlertModal}
        buttonAction={() => handleCloseAlertModal()}
        widthButton="100px"
      />
    </>
  );
};

ButtonsFooterJuridico.propTypes = {
  idLimite: PropTypes.number.isRequired,
  cadastroPage: PropTypes.func,
  enviarProposta: PropTypes.func,
  openForm: PropTypes.bool,
  user: PropTypes.object.isRequired,
  alertModalType: PropTypes.string,
  listaDocumentosFormalizar: PropTypes.object,
  listaPessoaDocumentacao: PropTypes.object,
  isReadonlyStatus: PropTypes.bool,
};

ButtonsFooterJuridico.defaultProps = {
  cadastroPage: () => {},
  enviarProposta: () => {},
  openForm: false,
  alertModalType: '',
  listaDocumentosFormalizar: {},
  listaPessoaDocumentacao: {},
  isReadonlyStatus: false,
};

export default ButtonsFooterJuridico;
