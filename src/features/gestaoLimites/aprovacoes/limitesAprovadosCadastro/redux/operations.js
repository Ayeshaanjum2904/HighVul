import logger from 'utils/logger';
import { SnackbarActions } from 'modules/snackbar';
import { getUnmaskedInput } from 'utils/masks';
import actions from './actions';
import service from './service';
import serviceLimites from '../../limitesAprovadosPage/redux/service';
import pageActions from '../../limitesAprovadosPage/redux/actions';

const setSelectedItems = (idTipo) => (dispatch) => {
  dispatch(actions.setSelectedItems(idTipo));
};

const getTipoDocumentoList = () => async (dispatch) => {
  try {
    dispatch(actions.getTipoDocumentoListStart());
    const documentoList = await service.getListTipoDocumento();
    const documentoListText = documentoList.map((item) => ({
      ...item,
      value: item.text,
    }));
    dispatch(actions.getTipoDocumentoListSuccess(documentoListText));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getTipoDocumentoListError());
  }
};

const getTipoRelacionamentoList = () => async (dispatch) => {
  try {
    dispatch(actions.getTipoRelacionamentoListStart());
    const relacionamentoList = await service.getListTipoRelacionamento();
    const relacionamentoListText = relacionamentoList.map((item) => ({
      ...item,
      value: item.text,
    }));
    dispatch(actions.getTipoRelacionamentoListSuccess(relacionamentoListText));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getTipoRelacionamentoListError());
  }
};

const getPessoaDocumentacao = (idLimite) => async (dispatch) => {
  try {
    dispatch(actions.getPessoaDocumentacaoStart());
    const listaPessoaDocumentacao = await service.getPessoaDocumentacao(idLimite);
    dispatch(actions.getPessoaDocumentacaoSuccess(listaPessoaDocumentacao));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getPessoaDocumentacaoError());
  }
};

const insertTipoDocumento = (tipoDocumento) => async (dispatch) => {
  try {
    dispatch(actions.insertTipoDocumentoStart());
    const body = {
      tipo: [tipoDocumento],
    };
    await service.insertTipoDocumento(body);
    const documentoList = await service.getListTipoDocumento();
    dispatch(actions.insertTipoDocumentoSuccess(documentoList));
  } catch {
    dispatch(actions.insertTipoDocumentoError());
  }
};

const insertTipoRelacionamento = (tipoRelacionamento) => async (dispatch) => {
  try {
    dispatch(actions.insertTipoRelacionamentoStart());
    const body = {
      tipo: [tipoRelacionamento],
    };
    await service.insertTipoRelacionamento(body);
    const relacionamentoList = await service.getListTipoRelacionamento();
    dispatch(actions.insertTipoRelacionamentoSuccess(relacionamentoList));
  } catch {
    dispatch(actions.insertTipoRelacionamentoError());
  }
};

const insertPessoaDocumentacao = (listaDocumento, idLimite) => async (dispatch) => {
  try {
    dispatch(actions.insertPessoaDocumentacaoStart());
    const body = {
      idLimite,
      nome: listaDocumento.nome,
      tipoPessoa: listaDocumento.tipoPessoa,
      documento: listaDocumento.documento,
      tipoRelacionamento: listaDocumento.relacionamento,
      tipoDocumento: listaDocumento.documentos,
      observacao: listaDocumento.observacoes,
    };
    await service.insertPessoaDocumentacao(body);
    dispatch(getPessoaDocumentacao(idLimite));
    dispatch(actions.insertPessoaDocumentacaoSuccess());
    dispatch(SnackbarActions.addSnackbar('Lista de documentos inserida com sucesso', 'success'));
  } catch {
    dispatch(actions.insertPessoaDocumentacaoError());
    dispatch(SnackbarActions.addSnackbar('Erro ao cadastrar lista de documentos', 'error'));
  }
};

const deletePessoaDocumentacao = (idPessoaDocumentacao, idLimite) => async (dispatch) => {
  try {
    dispatch(actions.deletePessoaDocumentacaoStart());
    await service.deletePessoaDocumentacao(idPessoaDocumentacao);
    dispatch(actions.deletePessoaDocumentacaoSuccess());
    dispatch(getPessoaDocumentacao(idLimite));
  } catch {
    dispatch(actions.deletePessoaDocumentacaoError());
    dispatch(getPessoaDocumentacao(idLimite));
  }
};

const updateAndSaveStatus = (idLimite, status, motivo = null) => async (dispatch) => {
  try {
    const response = await serviceLimites.updateAndSaveStatus({
      status,
      idLimiteList: [idLimite],
      MotivoCancelamento: motivo,
    });
    if (response.status !== 200) {
      throw new Error('Erro ao alterar status da aprovação.');
    } else {
      dispatch(SnackbarActions.addSnackbar('Aprovação enviada com sucesso.', 'success'));
      return true;
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao alterar status da aprovação.', 'error'));
    logger.error(e);
    return false;
  }
};

const deletePessoaDocumento = (documento, motivo, closeModal) => async (dispatch) => {
  try {
    const body = {
      data: {
        IdDocumento: documento.idPessoaDocumentacao,
        Observacao: {
          Observacao: motivo,
          Perfil: 'cadastro',
          EnviarDealer: true,
          IdLimitesAprovadosHub: documento.idLimite,
          Anexos: [],
          Detalhes: `Documentos do Cadastro | Lista: ${documento.nomeLista} | Documento: ${documento.nomeDocumento}`,
          AnexoRemovido: true,
          NotificacaoSistema: true,
        },
      },
    };

    const statusLimite = await service.deletePessoaDocumento(body);

    dispatch(SnackbarActions.addSnackbar('Documento invalidado com sucesso', 'success'));
    dispatch(actions.deleteDocumento(documento));
    if (statusLimite) dispatch(pageActions.updateLimiteStatus(statusLimite));
    closeModal();
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao invalidar documento'));
    logger.error(e);
  }
};

const updateDocumentoValidacao = (documento) => async (dispatch) => {
  try {
    const response = await service.updateDocumentoValidacao(documento.idPessoaDocumentacao);
    if (response.data) {
      dispatch(SnackbarActions.addSnackbar('Documento validado com sucesso', 'success'));
      dispatch(actions.updateDocumentoValidar(documento));

      await service.fecharStatusNotificacaoPorDocumentos(documento.idPessoaDocumentacao);
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao validar documento'));
    logger.error(e);
  }
};

const updateDocumentoDesfazerValidacao = (documento) => async (dispatch) => {
  try {
    const response = await service.updateDocumentoDesfazerValidacao(documento.idPessoaDocumentacao);
    if (response.data) {
      dispatch(SnackbarActions.addSnackbar('Documento desvalidado com sucesso', 'success'));
      dispatch(actions.updateDocumentoDesfazerValidacao(documento));
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao desfazer a validação do documento'));
    logger.error(e);
  }
};

const getDocumentoDownload = (idDocumento, isCadastro) => async (dispatch) => {
  try {
    const response = isCadastro
      ? await service.getDocumentoPessoaCadastro(idDocumento)
      : await service.getDocumentoPessoa(idDocumento);

    if (response.data) {
      window.open(response.data);
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao baixar documento'));
    logger.error(e);
  }
};

const deleteTipoDocumento = (idDocumento) => async (dispatch) => {
  try {
    const response = await service.deleteTipoDocumento(idDocumento);

    if (response) {
      dispatch(SnackbarActions.addSnackbar('Documento excluído com sucesso', 'success'));
      dispatch(actions.deleteTipoDocumento(response));
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao excluir documento'));
    logger.error(e);
  }
};

const deleteTipoRelacionamento = (idRelacionamento) => async (dispatch) => {
  try {
    const response = await service.deleteTipoRelacionamento(idRelacionamento);

    if (response) {
      dispatch(SnackbarActions.addSnackbar('Relacionamento excluído com sucesso', 'success'));
      dispatch(actions.deleteTipoRelacionamento(response));
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao excluir relacionamento'));
    logger.error(e);
  }
};

const insertDocumentosCadastro = (data) => async (dispatch) => {
  try {
    dispatch(actions.insertPessoaDocumentacaoStart());
    const body = {
      idLimite: data.idLimitesAprovadosHub,
      nome: data.nome,
      tipoPessoa: data.tipoPessoa,
      documento: getUnmaskedInput(data.documento),
      tipoRelacionamento: data.tipoRelacionamento,
      tipoDocumento: data.tipoDocumento,
      anexos: data.anexos,
    };
    await service.insertPessoaDocumentacao(body);
    dispatch(getPessoaDocumentacao(data.idLimitesAprovadosHub));
    dispatch(actions.insertPessoaDocumentacaoSuccess());
    dispatch(SnackbarActions.addSnackbar('Lista de documentos inserida com sucesso', 'success'));
  } catch {
    dispatch(actions.insertPessoaDocumentacaoError());
    dispatch(SnackbarActions.addSnackbar('Erro ao cadastrar lista de documentos', 'error'));
  }
};

const uploadArquivoTemporario = (file) => async (dispatch) => {
  try {
    const response = await service.getUrlUploadTemp(file);
    if (response.data) {
      const responseUpload = await service.uploadFile(response.data.urlUpload, file);
      if (responseUpload === 200) {
        dispatch(SnackbarActions.addSnackbar('Anexo inserido com sucesso', 'success'));
        return {
          nomeGuid: response.data.nomeGuid,
          nomeOriginal: response.data.nomeOriginal,
          tamanho: response.data.tamanhoEmMb,
          type: response.data.type,
        };
      }
    }
    throw new Error();
  } catch {
    dispatch(SnackbarActions.addSnackbar('Erro ao inserir anexo', 'error'));
    return null;
  }
};
// eslint-disable-next-line max-len
const updatePessoaDocumentacao = (idLimite, listaDocumento) => async (dispatch) => {
  try {
    dispatch(actions.updatePessoaDocumentacaoStart());
    const body = {
      idPessoaDocumentacao: listaDocumento.idPessoaDocumentacao,
      relacionamento: listaDocumento.tipoRelacionamento,
      tipoPessoa: listaDocumento.tipoPessoa,
      documento: getUnmaskedInput(listaDocumento.documento),
      listToInclude: listaDocumento.listToInclude,
      listToExclude: listaDocumento.listToExclude,
    };
    await service.updatePessoaDocumentacao(body);
    dispatch(getPessoaDocumentacao(idLimite));
    dispatch(actions.updatePessoaDocumentacaoSuccess());
    dispatch(SnackbarActions.addSnackbar('Alterações salvas com sucesso', 'success'));
  } catch {
    dispatch(actions.updatePessoaDocumentacaoError());
    dispatch(SnackbarActions.addSnackbar('Erro ao salvar alterações', 'error'));
  }
};

const uploadDocumento = (file) => async () => {
  try {
    const response = await service.getUrlUploadTemp(file);
    if (response.data) {
      const responseUpload = await service.uploadFile(response.data.urlUpload, file);

      if (responseUpload === 200) {
        return response.data;
      }
    }
    throw new Error();
  } catch {
    return null;
  }
};

const updateComJustificativa = (idLimite, status, motivo, documento, back) => async (dispatch) => {
  try {
    await service.updateAndSaveJustificativa({
      status,
      idLimiteList: [idLimite],
      Observacao: {
        Observacao: motivo,
        Perfil: 'cadastro',
        EnviarDealer: false,
        IdLimitesAprovadosHub: idLimite,
        Anexos: documento
          ? [{
            nomeGuid: documento.nomeGuid,
            nomeOriginal: documento.nomeOriginal,
            tamanho: documento.tamanhoEmMb,
          }]
          : [],
        Detalhes: '',
        AnexoRemovido: false,
        NotificacaoSistema: true,
        Justificativa: 'Justificativa - Documentação incompleta',
      },
    });
    dispatch(SnackbarActions.addSnackbar('Aprovação enviada com sucesso.', 'success'));
    back();
  } catch (e) {
    logger.error(e);
    dispatch(SnackbarActions.addSnackbar('Erro ao atualizar a aprovação.', 'error'));
  }
};

export default {
  insertTipoDocumento,
  insertTipoRelacionamento,
  insertPessoaDocumentacao,
  setSelectedItems,
  getPessoaDocumentacao,
  deletePessoaDocumentacao,
  updateAndSaveStatus,
  getTipoDocumentoList,
  getTipoRelacionamentoList,
  deletePessoaDocumento,
  updateDocumentoValidacao,
  updateDocumentoDesfazerValidacao,
  getDocumentoDownload,
  deleteTipoDocumento,
  deleteTipoRelacionamento,
  uploadArquivoTemporario,
  insertDocumentosCadastro,
  updatePessoaDocumentacao,
  updateComJustificativa,
  uploadDocumento,
};
