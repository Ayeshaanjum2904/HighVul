const INSERIR_ANEXO_START = 'simulador/INSERIR_ANEXO_START';
const INSERIR_ANEXO_SUCCESS = 'simulador/INSERIR_ANEXO_SUCCESS';
const INSERIR_ANEXO_ERROR = 'simulador/INSERIR_ANEXO_ERROR';

const SALVAR_TAXAS_START = 'simulador/SALVAR_TAXAS_START';
const SALVAR_TAXAS_SUCCESS = 'simulador/SALVAR_TAXAS_SUCCESS';
const SALVAR_TAXAS_ERROR = 'simulador/SALVAR_TAXAS_ERROR';

const GET_CONFIGURACAO_START = 'simulador/GET_CONFIGURACAO_START';
const GET_CONFIGURACAO_SUCCESS = 'simulador/GET_CONFIGURACAO_SUCCESS';
const GET_CONFIGURACAO_ERROR = 'simulador/GET_CONFIGURACAO_ERROR';

const EXPORT_TAXAS_START = 'simulador/EXPORT_TAXAS_START';
const EXPORT_TAXAS_SUCCESS = 'simulador/EXPORT_TAXAS_SUCCESS';
const EXPORT_TAXAS_ERROR = 'simulador/EXPORT_TAXAS_ERROR';

const LIMPAR_ANEXO_TAXAS = 'simulador/LIMPAR_ANEXO_TAXAS';

const RESET_STORE = 'simulador/RESET_STORE';

const inserirAnexoStart = () => ({
  type: INSERIR_ANEXO_START,
});

const inserirAnexoSuccess = (dadosConvertidos) => ({
  type: INSERIR_ANEXO_SUCCESS,
  payload: { dadosConvertidos },
});

const inserirAnexoError = (error, errorMessage) => ({
  type: INSERIR_ANEXO_ERROR,
  payload: {
    error,
    errorMessage: errorMessage || 'Arquivo inválido. Para corrigir, exporte o template de taxas vigentes e reenvie o arquivo. Nenhuma alteração foi salva.',
  },
});

const salvarTaxasStart = () => ({
  type: SALVAR_TAXAS_START,
});

const salvarTaxasSuccess = () => ({
  type: SALVAR_TAXAS_SUCCESS,
});

const salvarTaxasError = (error) => ({
  type: SALVAR_TAXAS_ERROR,
  payload: { error },
});

const getConfiguracaoStart = () => ({
  type: GET_CONFIGURACAO_START,
});

const getConfiguracaoSuccess = (configuracao) => ({
  type: GET_CONFIGURACAO_SUCCESS,
  payload: { configuracao },
});

const getConfiguracaoError = (error) => ({
  type: GET_CONFIGURACAO_ERROR,
  payload: { error },
});

const exportTaxasStart = () => ({
  type: EXPORT_TAXAS_START,
});

const exportTaxasSuccess = () => ({
  type: EXPORT_TAXAS_SUCCESS,
});

const exportTaxasError = (error) => ({
  type: EXPORT_TAXAS_ERROR,
  payload: { error },
});

const limparAnexoTaxas = () => ({
  type: LIMPAR_ANEXO_TAXAS,
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    INSERIR_ANEXO_START,
    INSERIR_ANEXO_SUCCESS,
    INSERIR_ANEXO_ERROR,
    SALVAR_TAXAS_START,
    SALVAR_TAXAS_SUCCESS,
    SALVAR_TAXAS_ERROR,
    GET_CONFIGURACAO_START,
    GET_CONFIGURACAO_SUCCESS,
    GET_CONFIGURACAO_ERROR,
    EXPORT_TAXAS_START,
    EXPORT_TAXAS_SUCCESS,
    EXPORT_TAXAS_ERROR,
    LIMPAR_ANEXO_TAXAS,
    RESET_STORE,
  },

  inserirAnexoStart,
  inserirAnexoSuccess,
  inserirAnexoError,
  salvarTaxasStart,
  salvarTaxasSuccess,
  salvarTaxasError,
  getConfiguracaoStart,
  getConfiguracaoSuccess,
  getConfiguracaoError,
  exportTaxasStart,
  exportTaxasSuccess,
  exportTaxasError,
  limparAnexoTaxas,
  resetStore,
};
