import { createSelector } from 'reselect';
import { camelFormat } from '../../../../../../utils/format';

const concessionariaNome = createSelector(
  (state) => state.concessionarias.details.concessionaria?.nome,
  (nome) => camelFormat(nome, 2),
);

const selectRegionalFCA = createSelector(
  (state) => state.concessionarias.details.dataUpdate?.descricaoRegionalFca,
  (state) => state.concessionarias.details.concessionaria?.descricaoRegionalFca,
  (regionalUpdate, regional) => regionalUpdate ?? camelFormat(regional, 2),
);

const selectRegionalJeep = createSelector(
  (state) => state.concessionarias.details.dataUpdate?.regionalJeep,
  (state) => state.concessionarias.details.concessionaria?.regionalJeep,
  (regionalUpdate, regional) => regionalUpdate ?? camelFormat(regional, 2),
);

const selectGerente = createSelector(
  (state) => state.concessionarias.details.dataUpdate?.gerenteJeep,
  (state) => state.concessionarias.details.concessionaria?.gerenteJeep,
  (gerenteUpdate, gerente) => gerenteUpdate ?? camelFormat(gerente, 2),
);

const selectConsultorJeep = createSelector(
  (state) => state.concessionarias.details.dataUpdate?.consultorJeep,
  (state) => state.concessionarias.details.concessionaria?.consultorJeep,
  (consultorUpdate, consultor) => consultorUpdate ?? camelFormat(consultor, 2),
);

const selectConsultorFca = createSelector(
  (state) => state.concessionarias.details.dataUpdate?.consultorFca,
  (state) => state.concessionarias.details.concessionaria?.consultorFca,
  (consultorUpdate, consultor) => consultorUpdate ?? camelFormat(consultor, 2),
);

const selectCode = createSelector(
  (state) => state.concessionarias.details.dataUpdate?.codigoRegionalFca,
  (state) => state.concessionarias.details.concessionaria?.codigoRegionalFca,
  (codigoUpdate, codigo) => codigoUpdate ?? codigo,
);

export default {
  concessionariaNome,
  selectRegionalJeep,
  selectGerente,
  selectConsultorJeep,
  selectConsultorFca,
  selectCode,
  selectRegionalFCA,
};
