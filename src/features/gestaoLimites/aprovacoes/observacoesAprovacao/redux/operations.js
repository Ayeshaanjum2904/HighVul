import logger from 'utils/logger';
import { SnackbarActions } from 'modules/snackbar';
import service from './service';
import actions from './actions';

const getObservacoes = (idLimite) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    dispatch(actions.getObservacoesStart());
    const body = {
      Value: idLimite,
    };
    const response = await service.getObservacoes(user.email, body);

    dispatch(actions.getObservacoesSuccess(response));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getObservacoesError());
  }
};

const insertObservacao = (data, idLimite) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    dispatch(actions.insertObservacaoStart());

    const body = {
      observacao: data.observacao,
      perfil: data.perfil,
      enviarDealer: data.enviarParaDealer,
      idLimitesAprovadosHub: idLimite,
      anexos: data.anexos.map((anexo) => ({
        nomeGuid: anexo.nomeGuid,
        nomeOriginal: anexo.nomeOriginal,
        tamanho: anexo.tamanho,
      })),
    };

    await service.insertObservacao(user.email, body);

    dispatch(actions.insertObservacaoSuccess());
    dispatch(SnackbarActions.addSnackbar('Observação enviada com sucesso', 'success'));
  } catch (e) {
    logger.error(e);
    dispatch(actions.insertObservacaoError());
    dispatch(SnackbarActions.addSnackbar('Ocorreu um erro ao enviar observação', 'error'));
  }
};

const insertControleObservacao = (idLimite, dataCriacao) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    const body = {
      idLimiteAprovado: idLimite,
      dataCriacao,
    };
    await service.insertControleObservacao(user.email, body);
    dispatch(actions.insertControleObservacao());
  } catch (e) {
    logger.error(e);
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
          isLoading: false,
        };
      }
    }
    throw new Error();
  } catch {
    dispatch(SnackbarActions.addSnackbar('Erro ao inserir anexo', 'error'));
    return null;
  }
};

const getDocumentoDownload = (guidDocumento) => async (dispatch) => {
  try {
    const response = await service.getDocumentoObservacao(guidDocumento);

    if (response.data) {
      window.open(response.data);
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao baixar documento'));
    logger.error(e);
  }
};

const resetStore = () => async (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  getObservacoes,
  insertObservacao,
  insertControleObservacao,
  resetStore,
  uploadArquivoTemporario,
  getDocumentoDownload,
};
