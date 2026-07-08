import actions from './actions';

const INITIAL_STATE = {
  listaPessoaDocumentacao: {
    isLoading: false,
    isError: false,
    isPendenteAnexo: false,
    isValidado: false,
    listaDados: [],
  },
  documento: {
    isLoading: false,
    isError: false,
    documentoList: [],
  },
  tipoDocumentoFormalizar: {
    isLoading: false,
    isError: false,
    documentoList: [],
  },
  documentosFormalizar: {
    isLoading: false,
    isError: false,
    isSaved: false,
    documentosFormalizarList: [],
  },
  dadosModalDocusign: {
    isLoading: false,
    isError: false,
    dadosEnvelopeDocusign: [],
  },
};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  switch (action.type) {
    case actions.types.GET_PESSOA_DOCUMENTACAO_START:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: true,
          isError: false,
          listaDados: [],
        },
      };
    case actions.types.GET_PESSOA_DOCUMENTACAO_SUCCESS:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: false,
          isError: false,
          listaDados: action.payload.listaPessoaDocumentacao,
        },
      };
    case actions.types.GET_PESSOA_DOCUMENTACAO_ERROR:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: false,
          isError: true,
          listaDados: [],
        },
      };
    case actions.types.DELETE_PESSOA_DOCUMENTACAO_START:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.DELETE_PESSOA_DOCUMENTACAO_SUCCESS:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.DELETE_PESSOA_DOCUMENTACAO_ERROR:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: false,
          isError: true,
        },
      };

    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    case actions.types.INSERT_TIPO_DOCUMENTO_START:
      return {
        ...state,
        documento: {
          ...state.documento,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.INSERT_TIPO_DOCUMENTO_SUCCESS:
      return {
        ...state,
        documento: {
          ...state.documento,
          isLoading: false,
          isError: false,
          documentoList: action.payload.documentoList,
        },
      };
    case actions.types.INSERT_TIPO_DOCUMENTO_ERROR:
      return {
        ...state,
        documento: {
          ...state.documento,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.GET_TIPO_DOCUMENTO_START:
      return {
        ...state,
        documento: {
          ...state.documento,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_TIPO_DOCUMENTO_SUCCESS:
      return {
        ...state,
        documento: {
          ...state.documento,
          isLoading: false,
          isError: false,
          documentoList: action.payload.documentoList,
        },
      };
    case actions.types.GET_TIPO_DOCUMENTO_ERROR:
      return {
        ...state,
        documento: {
          ...state.documento,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.INSERT_PESSOA_DOCUMENTACAO_START:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.INSERT_PESSOA_DOCUMENTACAO_SUCCESS:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.INSERT_PESSOA_DOCUMENTACAO_ERROR:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.INSERT_TIPO_DOCUMENTO_FORMALIZAR_START:
      return {
        ...state,
        tipoDocumentoFormalizar: {
          ...state.tipoDocumentoFormalizar,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.INSERT_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS:
      return {
        ...state,
        tipoDocumentoFormalizar: {
          ...state.tipoDocumentoFormalizar,
          isLoading: false,
          isError: false,
          documentoList: state.tipoDocumentoFormalizar.documentoList
            .concat(action.payload.tipoDocumentoList)
            .sort((a, b) => a.text.localeCompare(b.text)),
        },
      };
    case actions.types.INSERT_TIPO_DOCUMENTO_FORMALIZAR_ERROR:
      return {
        ...state,
        tipoDocumentoFormalizar: {
          ...state.tipoDocumentoFormalizar,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.GET_TIPO_DOCUMENTO_FORMALIZAR_START:
      return {
        ...state,
        tipoDocumentoFormalizar: {
          ...state.tipoDocumentoFormalizar,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS:
      return {
        ...state,
        tipoDocumentoFormalizar: {
          ...state.tipoDocumentoFormalizar,
          isLoading: false,
          isError: false,
          documentoList: action.payload.tipoDocumentoList,
        },
      };
    case actions.types.GET_TIPO_DOCUMENTO_FORMALIZAR_ERROR:
      return {
        ...state,
        tipoDocumentoFormalizar: {
          ...state.tipoDocumentoFormalizar,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.INSERT_DOCUMENTO_FORMALIZAR_START:
      return {
        ...state,
        documentosFormalizar: {
          ...state.documentosFormalizar,
          isLoading: true,
          isError: false,
          isSaved: false,
        },
      };
    case actions.types.INSERT_DOCUMENTO_FORMALIZAR_SUCCESS:
      return {
        ...state,
        documentosFormalizar: {
          ...state.documentosFormalizar,
          isLoading: false,
          isError: false,
          isSaved: true,
          documentosFormalizarList: action.payload.documentosFormalizarList,
        },
      };
    case actions.types.INSERT_DOCUMENTO_FORMALIZAR_ERROR:
      return {
        ...state,
        documentosFormalizar: {
          ...state.documentosFormalizar,
          isLoading: false,
          isError: true,
          isSaved: false,
        },
      };
    case actions.types.DELETE_DOCUMENTO_FORMALIZAR_START:
      return {
        ...state,
        documentosFormalizar: {
          ...state.documentosFormalizar,
          isLoading: true,
          isError: false,
          isSaved: false,
        },
      };
    case actions.types.DELETE_DOCUMENTO_FORMALIZAR_SUCCESS:
      return {
        ...state,
        documentosFormalizar: {
          ...state.documentosFormalizar,
          isLoading: false,
          isError: false,
          isSaved: true,
          documentosFormalizarList: action.payload.documentosFormalizarList,
        },
      };
    case actions.types.DELETE_DOCUMENTO_FORMALIZAR_ERROR:
      return {
        ...state,
        documentosFormalizar: {
          ...state.documentosFormalizar,
          isLoading: false,
          isError: true,
          isSaved: false,
        },
      };
    case actions.types.GET_DOCUMENTO_FORMALIZAR_START:
      return {
        ...state,
        documentosFormalizar: {
          ...state.documentosFormalizar,
          isLoading: true,
          isError: false,
          isSaved: false,
        },
      };
    case actions.types.GET_DOCUMENTO_FORMALIZAR_SUCCESS:
      return {
        ...state,
        documentosFormalizar: {
          ...state.documentosFormalizar,
          isLoading: false,
          isError: false,
          documentosFormalizarList: action.payload.documentosFormalizarList,
        },
      };
    case actions.types.GET_DOCUMENTO_FORMALIZAR_ERROR:
      return {
        ...state,
        documentosFormalizar: {
          ...state.documentosFormalizar,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.UPDATE_DOCUMENTO_VALIDADO:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          listaDados: [
            ...state
              .listaPessoaDocumentacao
              .listaDados
              .toSpliced(action.payload.documento.indexPessoa, 1, {
                ...state
                  .listaPessoaDocumentacao
                  .listaDados[action.payload.documento.indexPessoa],
                documentoPendente: [
                  ...state
                    .listaPessoaDocumentacao
                    .listaDados[action.payload.documento.indexPessoa]
                    .documentoPendente
                    .toSpliced(action.payload.documento.indexDocumento, 1, {
                      ...state
                        .listaPessoaDocumentacao
                        .listaDados[action.payload.documento.indexPessoa]
                        .documentoPendente[action.payload.documento.indexDocumento],
                      validado: true,
                    }),
                ],

              }),
          ],
        },
      };
    case actions.types.UPDATE_DOCUMENTO_DESVALIDADO:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          listaDados: [
            ...state
              .listaPessoaDocumentacao
              .listaDados
              .toSpliced(action.payload.documento.indexPessoa, 1, {
                ...state
                  .listaPessoaDocumentacao
                  .listaDados[action.payload.documento.indexPessoa],
                documentoPendente: [
                  ...state
                    .listaPessoaDocumentacao
                    .listaDados[action.payload.documento.indexPessoa]
                    .documentoPendente
                    .toSpliced(action.payload.documento.indexDocumento, 1, {
                      ...state
                        .listaPessoaDocumentacao
                        .listaDados[action.payload.documento.indexPessoa]
                        .documentoPendente[action.payload.documento.indexDocumento],
                      validado: false,
                    }),
                ],

              }),
          ],
        },
      };
    case actions.types.UPDATE_DOCUMENTO_INVALIDADO:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          listaDados: [
            ...state
              .listaPessoaDocumentacao
              .listaDados
              .toSpliced(action.payload.documento.indexPessoa, 1, {
                ...state
                  .listaPessoaDocumentacao
                  .listaDados[action.payload.documento.indexPessoa],
                documentoPendente: [
                  ...state
                    .listaPessoaDocumentacao
                    .listaDados[action.payload.documento.indexPessoa]
                    .documentoPendente
                    .toSpliced(action.payload.documento.indexDocumento, 1, {
                      ...state
                        .listaPessoaDocumentacao
                        .listaDados[action.payload.documento.indexPessoa]
                        .documentoPendente[action.payload.documento.indexDocumento],
                      validado: false,
                      documentoId: null,
                      documentoNome: null,
                      documentoTamanho: null,
                      motivoRemocao: action.payload.documento.motivoRemocao,
                    }),
                ],

              }),
          ],
        },
      };
    case actions.types.UPDATE_STATUS_PENDENTE_ANEXO:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          listaDados: [
            ...state
              .listaPessoaDocumentacao
              .listaDados
              .toSpliced(action.payload.indexPessoa, 1, {
                ...state
                  .listaPessoaDocumentacao
                  .listaDados[action.payload.indexPessoa],
                isPendenteAnexo: action.payload.status,
              }),
          ],
        },
      };
    case actions.types.UPDATE_STATUS_VALIDADO:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          listaDados: [
            ...state
              .listaPessoaDocumentacao
              .listaDados
              .toSpliced(action.payload.indexPessoa, 1, {
                ...state
                  .listaPessoaDocumentacao
                  .listaDados[action.payload.indexPessoa],
                isValidado: action.payload.status,
              }),
          ],
        },
      };
    case actions.types.GET_DADOS_ENVELOPE_DOCUSIGN_START:
      return {
        ...state,
        dadosModalDocusign: {
          ...state.dadosModalDocusign,
          isLoading: true,
          isError: false,
          dadosEnvelopeDocusign: [],
        },
      };
    case actions.types.GET_DADOS_ENVELOPE_DOCUSIGN_SUCCESS:
      return {
        ...state,
        dadosModalDocusign: {
          ...state.dadosModalDocusign,
          isLoading: false,
          isError: false,
          dadosEnvelopeDocusign: action.payload.dadosEnvelopeDocusign,
        },
      };
    case actions.types.GET_DADOS_ENVELOPE_DOCUSIGN_ERROR:
      return {
        ...state,
        dadosModalDocusign: {
          ...state.dadosModalDocusign,
          isLoading: false,
          isError: true,
          dadosEnvelopeDocusign: [],
        },
      };
    default:
      return state;
  }
};
