import logger from 'utils/logger';
import { SnackbarActions } from 'modules/snackbar';
import { getUnmaskedInput } from 'utils/masks';
import actions from './actions';
import service from './service';

const getPessoaDocumentacao = (idLimite) => async (dispatch) => {
  try {
    dispatch(actions.getPessoaDocumentacaoStart());
    const listaPessoaDocumentacao = await service.getPessoaDocumentacao(idLimite);
    const listaPessoaDocumentacaoComStatus = listaPessoaDocumentacao.map((pessoaDocumentacao) => ({
      ...pessoaDocumentacao,
      isValidado: pessoaDocumentacao.documentoPendente.every((doc) => doc.validado),
      isPendenteAnexo: pessoaDocumentacao.documentoPendente.some((doc) => !doc.documentoId),
    }));
    dispatch(actions.getPessoaDocumentacaoSuccess(
      listaPessoaDocumentacaoComStatus,
    ));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getPessoaDocumentacaoError());
  }
};

const deletePessoaDocumentacao = (idPessoaDocumentacao, idLimite) => async (dispatch) => {
  try {
    dispatch(actions.deletePessoaDocumentacaoStart());
    await service.deletePessoaDocumentacao(idPessoaDocumentacao);
    dispatch(actions.deletePessoaDocumentacaoSuccess());
    dispatch(SnackbarActions.addSnackbar('Documentos excluidos com sucesso.', 'success'));
    dispatch(getPessoaDocumentacao(idLimite));
  } catch {
    dispatch(SnackbarActions.addSnackbar('Erro ao excluir documentos complementares.', 'error'));
    dispatch(actions.deletePessoaDocumentacaoError());
    dispatch(getPessoaDocumentacao(idLimite));
  }
};

const getTipoDocumentoList = () => async (dispatch) => {
  try {
    dispatch(actions.getTipoDocumentoListStart());
    const documentoList = await service.getListTipoDocumento();
    dispatch(actions.getTipoDocumentoListSuccess(documentoList));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getTipoDocumentoListError());
  }
};

const insertTipoDocumento = (tipoDocumento) => async (dispatch) => {
  try {
    dispatch(actions.insertTipoDocumentoStart());
    await service.insertTipoDocumento(tipoDocumento);
    const documentoList = await service.getListTipoDocumento();
    dispatch(actions.insertTipoDocumentoSuccess(documentoList));
  } catch {
    dispatch(actions.insertTipoDocumentoError());
  }
};

const insertPessoaDocumentacao = (listaDocumento, idLimite, idPessoa) => async (dispatch) => {
  try {
    dispatch(actions.insertPessoaDocumentacaoStart());

    const listaArquivos = listaDocumento.listaArquivos?.reduce((lista, documento) => (
      documento.nomeGuid
        ? lista.push({
          nomeGuid: documento.nomeGuid,
          nomeOriginal: documento.nomeOriginal,
          tamanho: documento.tamanho,
          type: documento.type,
        }) && lista : lista), []);

    const body = {
      idLimite,
      id: idPessoa || null,
      nome: listaDocumento.nome,
      tipoPessoa: parseInt(listaDocumento.tipoPessoa, 10),
      documento: getUnmaskedInput(listaDocumento.documento),
      tipoDocumento: listaDocumento.documentos,
      observacoes: listaDocumento.observacao,
      listaArquivos,
      obsDocumentoComplementar: listaDocumento.obsDocumentoComplementar,
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
          tipo: 'juridico',
          file,
        };
      }
    }
    throw new Error();
  } catch {
    dispatch(SnackbarActions.addSnackbar('Erro ao inserir anexo', 'error'));
    return null;
  }
};

const uploadMultiplosArquivosTemporarios = (files) => async (dispatch) => {
  try {
    const responseUrls = await service.getUrlMultipleUploadsTemp(files);
    if (responseUrls.data) {
      const uploadPromises = responseUrls.data.map(
        (fileRef, index) => service.uploadFile(fileRef.urlUpload, files[index]),
      );
      const responsesStatus = await Promise.allSettled(uploadPromises);

      const uploads = [];
      responseUrls.data.forEach((file, index) => {
        if (responsesStatus[index].value === 200) {
          uploads.push({
            nomeGuid: file.nomeGuid,
            nomeOriginal: file.nomeOriginal,
            tamanho: file.tamanhoEmMb,
            type: file.type,
            tipo: 'juridico',
            file: files[index],
          });
        }
      });

      return uploads;
    }
    throw new Error();
  } catch {
    dispatch(SnackbarActions.addSnackbar('Erro ao inserir anexos', 'error'));
    return null;
  }
};

const getTipoDocumentoFormalizarList = () => async (dispatch) => {
  try {
    dispatch(actions.getTipoDocumentoFormalizarListStart());
    const documentoList = await service.getTipoDocumentoFormalizar();
    dispatch(actions.getTipoDocumentoFormalizarListSuccess(
      documentoList.map((doc) => ({ value: doc.id, text: doc.tipoDocumento })),
    ));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getTipoDocumentoFormalizarListError());
  }
};

const insertTipoDocumentoFormalizar = (tipoDocumento) => async (dispatch) => {
  try {
    dispatch(actions.insertTipoDocumentoFormalizarStart());
    const response = await service.insertTipoDocumentoFormalizar(tipoDocumento);
    dispatch(actions.insertTipoDocumentoFormalizarSuccess(
      response.map((doc) => ({ value: doc.id, text: doc.tipoDocumento })),
    ));
    return response[0]?.id;
  } catch {
    dispatch(actions.insertTipoDocumentoFormalizarError());
    return false;
  }
};

const deleteTipoDocumentoFormalizar = (idTipoDocumento) => async (dispatch) => {
  try {
    dispatch(actions.deleteTipoDocumentoFormalizarStart());
    const response = await service.deleteTipoDocumentoFormalizar(idTipoDocumento);
    dispatch(actions.deleteTipoDocumentoFormalizarSuccess());
    return response;
  } catch {
    dispatch(actions.deleteTipoDocumentoFormalizarError());
    return false;
  }
};

const getDocumentoFormalizarList = (id) => async (dispatch) => {
  try {
    dispatch(actions.getDocumentoFormalizarListStart());
    const documentoList = await service.getDocumentosFormalizar(id);
    const mappedDocumentList = documentoList.map((item) => ({
      ...item,
      listaArquivos: item?.listaArquivos?.map((file) => ({
        ...file,
      })),
    }));
    dispatch(actions.getDocumentoFormalizarListSuccess(mappedDocumentList));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getDocumentoFormalizarListError());
  }
};

const insertDocumentoFormalizar = (documento) => async (dispatch) => {
  const isEdit = Boolean(documento?.id);
  try {
    dispatch(actions.insertDocumentoFormalizarStart());

    const { filesToDelete, ...item } = documento;
    const bodyData = {
      idLimitesAprovadosHub: item?.idLimitesAprovadosHub,
      filesToDelete,
      items: [{
        ...item,
      }],
    };

    const response = await service.updateDocumentosFormalizar(bodyData);
    dispatch(actions.insertDocumentoFormalizarSuccess(response));
    dispatch(SnackbarActions.addSnackbar(`Documento ${isEdit ? 'editado' : 'adicionado'} com sucesso`, 'success'));
  } catch (error) {
    dispatch(actions.insertDocumentoFormalizarError());
    const errorMessage = error.message || `Erro ao ${isEdit ? 'editar' : 'adicionar'} documento`;
    dispatch(SnackbarActions.addSnackbar(errorMessage, 'error'));
  }
};

const deleteDocumentoFormalizar = (documentosFormalizar) => async (dispatch) => {
  try {
    dispatch(actions.deleteDocumentoFormalizarStart());
    const response = await service.updateDocumentosFormalizar(documentosFormalizar);

    const mappedDocumentList = response.map((item) => ({
      ...item,
      listaArquivos: item?.listaArquivos?.map((file) => ({
        ...file,
      })),
    }));
    dispatch(actions.deleteDocumentoFormalizarSuccess(mappedDocumentList));
    dispatch(SnackbarActions.addSnackbar('Documento removido com sucesso', 'success'));
  } catch {
    dispatch(actions.deleteDocumentoFormalizarError());
    dispatch(SnackbarActions.addSnackbar('Erro ao remover documento', 'error'));
  }
};

const getDocumentoDownload = (idDocumento) => async (dispatch) => {
  try {
    const response = await service.getAnexoDocumentoFormalizar(idDocumento);

    if (response.data) {
      window.open(response.data);
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao baixar documento'));
    logger.error(e);
  }
};

const enviarProposta = (idLimite, status, back) => async (dispatch) => {
  try {
    const response = await service.updateAndSaveStatus({
      status,
      idLimiteList: [idLimite],
      tipo: 'alterar_status',
    });
    if (response.status !== 200) {
      throw new Error('Erro ao enviar lista de documentos do juridico.');
    } else {
      dispatch(SnackbarActions.addSnackbar('Documentos enviados com sucesso.', 'success'));
      back();
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao enviar lista de documentos.', 'error'));
    logger.error(e);
  }
};

const updateDocumentoJuridicoValidacao = (documento) => async (dispatch) => {
  try {
    const response = await service.updateDocumentoJuridicoValidacao(documento.documentoId, true);
    if (response.data) {
      dispatch(SnackbarActions.addSnackbar('Documento validado com sucesso', 'success'));
      dispatch(actions.updateDocumentoValidado(documento));
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao validar documento'));
    logger.error(e);
  }
};

const updateDocumentoJuridicoDesfazerValidacao = (documento) => async (dispatch) => {
  try {
    const response = await service.updateDocumentoJuridicoValidacao(documento.documentoId, false);
    if (response.data) {
      dispatch(SnackbarActions.addSnackbar('Documento desvalidado com sucesso', 'success'));
      dispatch(actions.updateDocumentoDesValidado(documento));
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao desvalidar documento'));
    logger.error(e);
  }
};

const getDocumentoJuridicoDownload = (idDocumento) => async (dispatch) => {
  try {
    const response = await service.getDocumentoJuridicoPessoa(idDocumento);

    if (response.data) {
      window.open(response.data);
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao baixar documento'));
    logger.error(e);
  }
};

const invalidateDocumentoJuridico = (
  documento,
  motivo,
  idLimite,
  statusDestino,
  changeStatus,
  onSubmit,
) => async (dispatch) => {
  try {
    await service.deleteDocumentoJuridico({
      data: {
        IdDocumento: documento.documentoId,
        Observacao: {
          Observacao: motivo,
          Perfil: 'juridico',
          EnviarDealer: true,
          IdLimitesAprovadosHub: idLimite,
          Anexos: [],
          Detalhes: `Documentos Complementares | Lista: ${documento.lista} | Documento: ${documento.documentoNome}`,
          AnexoRemovido: true,
          NotificacaoSistema: true,
        },
      },
    });
    if (changeStatus) {
      await service.updateAndSaveStatus({
        status: statusDestino,
        idLimiteList: [idLimite],
        tipo: 'alterar_status',
      });
    }
    dispatch(SnackbarActions.addSnackbar('Documento invalidado com sucesso', 'success'));
    dispatch(actions.updateDocumentoInvalidado(
      {
        ...documento,
        motivoRemocao: [motivo].concat(documento.motivoRemocao),
      },
    ));

    onSubmit();
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao invalidar documento'));
    logger.error(e);
  }
};

const invalidarDocumentosFormalizarDealer = (
  docSelect,
  motivo,
  idLimite,
  invalidarTodos,
) => async (dispatch) => {
  const body = {
    data: {
      nomeGuid: docSelect.nomeGuid,
      Observacao: {
        Observacao: motivo,
        Perfil: 'juridico',
        EnviarDealer: true,
        IdLimitesAprovadosHub: idLimite,
        Anexos: [],
        Detalhes: `Documentos para Formalizar | Documento: ${docSelect.nomeDocumento}`,
        AnexoRemovido: true,
        NotificacaoSistema: true,
      },
    },
  };
  try {
    await service.invalidarDocumentoFormalizarDealer(body);
    await service.updateAndSaveStatus({
      status: invalidarTodos ? 'pendente_docs_formalizar_dealer' : 'docs_formalizar_enviados_parcialmente',
      idLimiteList: [idLimite],
      tipo: 'alterar_status',
    });
    dispatch(getDocumentoFormalizarList(idLimite));
    dispatch(SnackbarActions.addSnackbar('Documento invalidado com sucesso.', 'success'));
  } catch {
    dispatch(SnackbarActions.addSnackbar('Erro ao invalidar documento.', 'error'));
  }
};

const validarDocumentoFormalizarDealer = (idDocumento, idLimite) => async (dispatch) => {
  try {
    await service.validarDocumentoFormalizarDealer(idDocumento);
    dispatch(getDocumentoFormalizarList(idLimite));
    dispatch(SnackbarActions.addSnackbar('Documento validado com sucesso.', 'success'));
  } catch {
    dispatch(SnackbarActions.addSnackbar('Erro ao invalidar documento.', 'error'));
  }
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const validarDocumentoFormalizarJuridico = (idDocumento, validar, idLimite) => async (dispatch) => {
  try {
    await service.validarDocumentoFormalizarJuridico(idDocumento, validar);
    dispatch(getDocumentoFormalizarList(idLimite));
  } catch {
    dispatch(SnackbarActions.addSnackbar('Erro na validação do documento'));
  }
};

const updateStatusPendenteAnexo = (status, indexPessoa) => (dispatch) => {
  dispatch(actions.updateStatusPendenteAnexo(status, indexPessoa));
};

const updateStatusValidado = (status, indexPessoa) => (dispatch) => {
  dispatch(actions.updateStatusValidado(status, indexPessoa));
};
const getDadosEnvelopeDocusign = (idDocusign) => async (dispatch) => {
  try {
    dispatch(actions.getDadosEnvelopeDocusignStart());

    const response = await service.getDadosEnvelopeDocusign(idDocusign);
    dispatch(actions.getDadosEnvelopeDocusignSuccess(response));
  } catch (error) {
    dispatch(actions.getDadosEnvelopeDocusignError());
    const errorMessage = error.message;
    dispatch(SnackbarActions.addSnackbar(errorMessage, 'error'));
    logger.error(error);
  }
};

export default {
  enviarProposta,
  getPessoaDocumentacao,
  deletePessoaDocumentacao,
  getTipoDocumentoList,
  getDocumentoJuridicoDownload,
  insertTipoDocumento,
  insertPessoaDocumentacao,
  uploadArquivoTemporario,
  uploadMultiplosArquivosTemporarios,
  getTipoDocumentoFormalizarList,
  insertTipoDocumentoFormalizar,
  deleteTipoDocumentoFormalizar,
  getDocumentoFormalizarList,
  insertDocumentoFormalizar,
  deleteDocumentoFormalizar,
  getDocumentoDownload,
  updateDocumentoJuridicoValidacao,
  updateDocumentoJuridicoDesfazerValidacao,
  invalidateDocumentoJuridico,
  invalidarDocumentosFormalizarDealer,
  resetStore,
  validarDocumentoFormalizarDealer,
  validarDocumentoFormalizarJuridico,
  updateStatusPendenteAnexo,
  updateStatusValidado,
  getDadosEnvelopeDocusign,
};
