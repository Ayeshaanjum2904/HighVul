import actionsUpdateConcessionaria from './actionsUpdateConcessionaria';
import actionsUpdateGrupo from './actionsUpdateGrupo';
import actionsLoadData from './actionsLoadData';
import actionsUpdateContato from './actionsUpdateContato';

const SET_CONCESSIONARIAS_GRUPO = 'gruposDetalhe/SET_CONCESSIONARIAS';
const SET_CONTATOS_GRUPO = 'gruposDetalhe/SET_CONTATOS_GRUPO';
const SET_HISTORICO_GRUPO = 'gruposDetalhe/SET_HISTORICO_GRUPO';
const SET_GRUPO = 'gruposDetalhe/SET_GRUPO';
const SET_MARCAS = 'gruposDetalhe/SET_MARCAS';
const SET_REGIONAIS = 'gruposDetalhe/SET_REGIONAIS';
const SET_DEALERS = 'gruposDetalhe/SET_DEALERS';

const RESET_STORE = 'gruposDetalhe/RESET_STORE';
const DISMISS_SNACKBAR = 'gruposDetalhe/DISMISS_SNACKBAR';
const ADD_SNACKBAR = 'gruposDetalhe/ADD_SNACKBAR';

const setConcessionariasGrupo = (concessionarias) => ({
  type: SET_CONCESSIONARIAS_GRUPO,
  payload: { concessionarias },
});

const setContatosGrupo = (contatos) => ({
  type: SET_CONTATOS_GRUPO,
  payload: { contatos },
});

const setHistoricoGrupo = (historico) => ({
  type: SET_HISTORICO_GRUPO,
  payload: { historico },
});

const setGrupo = (grupo) => ({
  type: SET_GRUPO,
  payload: { grupo },
});

const setMarcas = (marcas) => ({
  type: SET_MARCAS,
  payload: { marcas },
});

const setRegionais = (regionais) => ({
  type: SET_REGIONAIS,
  payload: { regionais },
});

const setDealers = (dealers) => ({
  type: SET_DEALERS,
  payload: { dealers },
});

const addSnackbar = (message, type) => ({
  type: ADD_SNACKBAR,
  payload: { message, type },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    SET_CONCESSIONARIAS_GRUPO,
    SET_CONTATOS_GRUPO,
    SET_HISTORICO_GRUPO,
    SET_GRUPO,
    SET_REGIONAIS,
    SET_MARCAS,
    SET_DEALERS,

    ADD_SNACKBAR,
    DISMISS_SNACKBAR,
    RESET_STORE,

    ...actionsUpdateConcessionaria.types,
    ...actionsUpdateGrupo.types,
    ...actionsLoadData.types,
    ...actionsUpdateContato.types,
  },
  setConcessionariasGrupo,
  setContatosGrupo,
  setHistoricoGrupo,
  setGrupo,
  setRegionais,
  setMarcas,
  setDealers,

  addSnackbar,
  dismissSnackbar,
  resetStore,

  ...actionsUpdateConcessionaria.actions,
  ...actionsUpdateGrupo.actions,
  ...actionsLoadData.actions,
  ...actionsUpdateContato.actions,
};
