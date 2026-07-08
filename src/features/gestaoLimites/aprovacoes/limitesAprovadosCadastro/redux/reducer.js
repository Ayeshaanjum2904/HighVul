import actions from './actions';

const INITIAL_STATE = {
  setSelectedItems: [],
  documento: {
    isLoading: false,
    isError: false,
    documentoList: [],
  },
  relacionamento: {
    isLoading: false,
    isError: false,
    relacionamentoList: [],
  },
  pessoaDocumentacao: {
    isLoading: false,
    isError: false,
    listaDocumento: [],
  },

  isLoading: false,
  isError: false,

  listaPessoaDocumentacao: {
    isLoading: false,
    isError: false,
    listaDados: [],
  },
};
export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  switch (action.type) {
    case actions.types.INSERT_TIPO_RELACIONAMENTO_START:
      return {
        ...state,
        relacionamento: {
          ...state.relacionamento,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.INSERT_TIPO_RELACIONAMENTO_SUCCESS:
      return {
        ...state,
        relacionamento: {
          ...state.relacionamento,
          isLoading: false,
          isError: false,
          relacionamentoList: action.payload.relacionamentoList,
        },
      };
    case actions.types.INSERT_TIPO_RELACIONAMENTO_ERROR:
      return {
        ...state,
        relacionamento: {
          ...state.relacionamento,
          isLoading: false,
          isError: true,
        },
      };
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
    case actions.types.INSERT_PESSOA_DOCUMENTACAO_START:
      return {
        ...state,
        pessoaDocumentacao: {
          ...state.pessoaDocumentacao,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.INSERT_PESSOA_DOCUMENTACAO_SUCCESS:
      return {
        ...state,
        pessoaDocumentacao: {
          ...state.pessoaDocumentacao,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.INSERT_PESSOA_DOCUMENTACAO_ERROR:
      return {
        ...state,
        pessoaDocumentacao: {
          ...state.pessoaDocumentacao,
          isLoading: false,
          isError: true,
        },
      };
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
    case actions.types.SET_SELECTED_ITEMS:
      return {
        ...state,
        setSelectedItems: action.payload.idTipo,
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

    case actions.types.UPDATE_PESSOA_DOCUMENTACAO_START:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.UPDATE_PESSOA_DOCUMENTACAO_SUCCESS:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.UPDATE_PESSOA_DOCUMENTACAO_ERROR:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.DELETE_DOCUMENTO:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          listaDados: [
            ...state
              .listaPessoaDocumentacao
              .listaDados
              .toSpliced(action.payload.documento.indexPessoa, 1, {
                ...state.listaPessoaDocumentacao.listaDados[action.payload.documento.indexPessoa],
                documentos: [
                  ...state
                    .listaPessoaDocumentacao
                    .listaDados[action.payload.documento.indexPessoa]
                    .documentos
                    .filter((d) => d.idLimitesAprovadosDocumentos
                      !== action.payload.documento.idLimitesAprovadosDocumentos),
                ],
              }),
          ],
        },
      };
    case actions.types.UPDATE_DOCUMENTO_VALIDAR:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          listaDados: [
            ...state
              .listaPessoaDocumentacao
              .listaDados
              .toSpliced(action.payload.documento.indexPessoa, 1, {
                ...state.listaPessoaDocumentacao.listaDados[action.payload.documento.indexPessoa],
                documentos: [
                  ...state
                    .listaPessoaDocumentacao
                    .listaDados[action.payload.documento.indexPessoa]
                    .documentos
                    .toSpliced(action.payload.documento.indexDocumento, 1, {
                      ...state
                        .listaPessoaDocumentacao
                        .listaDados[action.payload.documento.indexPessoa]
                        .documentos[action.payload.documento.indexDocumento],
                      validado: true,
                    }),
                ],
              }),
          ],
        },
      };
    case actions.types.UPDATE_DOCUMENTO_DESFAZER_VALIDACAO:
      return {
        ...state,
        listaPessoaDocumentacao: {
          ...state.listaPessoaDocumentacao,
          listaDados: [
            ...state
              .listaPessoaDocumentacao
              .listaDados
              .toSpliced(action.payload.documento.indexPessoa, 1, {
                ...state.listaPessoaDocumentacao.listaDados[action.payload.documento.indexPessoa],
                documentos: [
                  ...state
                    .listaPessoaDocumentacao
                    .listaDados[action.payload.documento.indexPessoa]
                    .documentos
                    .toSpliced(action.payload.documento.indexDocumento, 1, {
                      ...state
                        .listaPessoaDocumentacao
                        .listaDados[action.payload.documento.indexPessoa]
                        .documentos[action.payload.documento.indexDocumento],
                      validado: false,
                    }),
                ],
              }),
          ],
        },
      };
    case actions.types.DELETE_TIPO_DOCUMENTO:
      return {
        ...state,
        documento: {
          ...state.documento,
          documentoList: action.payload.documentoList,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.DELETE_TIPO_RELACIONAMENTO:
      return {
        ...state,
        relacionamento: {
          ...state.relacionamento,
          relacionamentoList: action.payload.relacionamentoList,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.GET_TIPO_DOCUMENTO_LIST_START:
      return {
        ...state,
        documento: {
          ...state.documento,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_TIPO_DOCUMENTO_LIST_SUCCESS:
      return {
        ...state,
        documento: {
          ...state.documento,
          documentoList: action.payload.documentoList,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.GET_TIPO_DOCUMENTO_LIST_ERROR:
      return {
        ...state,
        documento: {
          ...state.documento,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.GET_TIPO_RELACIONAMENTO_LIST_START:
      return {
        ...state,
        relacionamento: {
          ...state.relacionamento,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_TIPO_RELACIONAMENTO_LIST_SUCCESS:
      return {
        ...state,
        relacionamento: {
          ...state.relacionamento,
          relacionamentoList: action.payload.relacionamentoList,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.GET_TIPO_RELACIONAMENTO_LIST_ERROR:
      return {
        ...state,
        relacionamento: {
          ...state.relacionamento,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
