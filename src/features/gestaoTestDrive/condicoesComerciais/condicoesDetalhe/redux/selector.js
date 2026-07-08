import { createSelector } from 'reselect';
import { formatDate } from 'utils/format';
import _ from 'lodash';
import moment from 'moment';

const dataInicio = createSelector(
  (state) => state.details.condicao?.dataInicio,
  (data) => (_.isEmpty(data) ? null : data),
);

const dataFim = createSelector(
  (state) => state.details.condicao?.dataFim,
  (data) => (_.isEmpty(data) ? null : data),
);

const dataAtual = createSelector(
  (state) => state.details.condicao?.dataInicio,
  (state) => state.details.condicao?.dataFim,
  (inicio, fim) => `Vigência: ${formatDate(inicio, 'DD MMM YYYY')} à ${formatDate(fim, 'DD MMM YYYY')}`,
);

const selectMvsDisabled = createSelector(
  (state) => state.details.mvsList,
  (state) => state.details.condicao.brand,
  (lista, marca) => (lista.length === 0 || marca === '_default'),
);

const isValidDate = createSelector(
  (state) => state.details.condicao?.dataFim,
  (state) => state.details.condicao?.dataInicio,
  (fim, inicio) => (moment.isMoment(fim) && moment.isMoment(inicio) ? inicio.isAfter(fim) : false),
);

const isMvsListEmpty = createSelector(
  (state) => state.details.mvsList,
  (state) => state.details.condicao.brand,
  (state) => state.details.isLoadingMvsList,
  (state) => state.details.isErrorMvsList,
  (lista, marca, isLoading, isErrorMvsList) => (lista.length === 0 && marca !== '_default'
    && !isLoading && !isErrorMvsList),
);

const isSelectedBrand = createSelector(
  (state) => state.details.condicao.brand,
  (brand) => _.isNull(brand) || brand === '_default',
);

const selectSelectedMvsList = createSelector(
  (state) => state.details?.mvsList,
  (state) => state.details.condicao?.condicoes,
  (mvsList, condicoes) => (_.isNull(condicoes)
    ? null
    : mvsList.map((m) => {
      if (condicoes.findIndex((c) => c.value === m.value) >= 0) return m.value;
      return null;
    })),
);

const desconto = createSelector(
  (state) => state.details.condicao?.desconto,
  (value) => value,
);

const taxa = createSelector(
  (state) => state.details.condicao?.taxa,
  (value) => value,
);

const parcelas = createSelector(
  (state) => state.details.condicao?.parcelas,
  (value) => value,
);

const prazo = createSelector(
  (state) => state.details.condicao?.prazo,
  (value) => value,
);

const coeficiente = createSelector(
  (state) => state.details.condicao?.coeficiente,
  (value) => value,
);

const condicaoOperacional = createSelector(
  (state) => state.details.condicao?.condicaoOperacional,
  (value) => value,
);

const marca = createSelector(
  (state) => state.details.condicao?.brand,
  (value) => value,
);

const concessionarias = createSelector(
  (state) => state.details.concessionariasList,
  (value) => value,
);

const selectConcessionariasSelecionadas = createSelector(
  (state) => state.details.concessionariasSelecionadas,
  (value) => value,
);

const selectSelectedConcessionariasList = createSelector(
  (state) => state.details.concessionariasList,
  (state) => state.details.concessionariasSelecionadas,
  (concessionariasList, concessionariasSelecionadas) => concessionariasSelecionadas
    .map((c) => concessionariasList.find((item) => item.value === c.value) || c)
    .filter(Boolean),
);

const hasConcessionariasChanges = createSelector(
  (state) => state.details.concessionariasSelecionadas,
  (state) => state.details.originalConcessionarias,
  (concessionariasSelecionadas, originalConcessionarias) => !_.isEqual(
    originalConcessionarias,
    concessionariasSelecionadas,
  ),
);

const hasChangesFromOriginal = createSelector(
  (state) => state.details.condicao,
  (state) => state.details.originalCondicao,
  (state) => state.details.originalConcessionarias,
  (state) => state.details.concessionariasSelecionadas,
  (currentCondicao, originalCondicao, originalConcessionarias, concessionariasSelecionadas) => {
    if (!originalCondicao) return false;

    const safeCompare = (current, original) => {
      if (current == null && original == null) return true;
      if (current == null || original == null) return false;
      return String(current) === String(original);
    };

    const fieldsToCompare = ['cartaMes', 'brand', 'produto', 'desconto', 'parcelas', 'taxa', 'prazo', 'coeficiente', 'condicaoOperacional'];

    const hasFieldChanges = fieldsToCompare.some(
      (field) => !safeCompare(currentCondicao[field], originalCondicao[field]),
    );
    if (hasFieldChanges) return true;

    if (currentCondicao.dataInicio && originalCondicao.dataInicio) {
      if (!moment(currentCondicao.dataInicio).isSame(originalCondicao.dataInicio, 'day')) {
        return true;
      }
    }

    if (currentCondicao.dataFim && originalCondicao.dataFim) {
      if (!moment(currentCondicao.dataFim).isSame(originalCondicao.dataFim, 'day')) {
        return true;
      }
    }

    if (currentCondicao.condicoes?.length !== originalCondicao.condicoes?.length) {
      return true;
    }

    const normalizeValue = (value) => {
      if (value == null) return null;
      return String(value);
    };

    const currentValues = currentCondicao.condicoes?.map((c) => ({
      value: normalizeValue(c.value),
      desconto: normalizeValue(c.desconto),
      parcelas: normalizeValue(c.parcelas),
      taxa: normalizeValue(c.taxa),
      prazo: normalizeValue(c.prazo),
      coeficiente: normalizeValue(c.coeficiente),
    })) || [];
    const originalValues = originalCondicao.condicoes?.map((c) => ({
      value: normalizeValue(c.value),
      desconto: normalizeValue(c.desconto),
      parcelas: normalizeValue(c.parcelas),
      taxa: normalizeValue(c.taxa),
      prazo: normalizeValue(c.prazo),
      coeficiente: normalizeValue(c.coeficiente),
    })) || [];

    if (!_.isEqual(currentValues, originalValues)) return true;

    return !_.isEqual(originalConcessionarias, concessionariasSelecionadas);
  },
);

const actionButtonDisabled = createSelector(
  (state) => state.details.condicao,
  (state) => state.details.originalCondicao,
  hasChangesFromOriginal,
  (condicao, originalCondicao, hasChanges) => {
    const isDuplicating = !!originalCondicao;
    const baseDisabled = (
      condicao.dataInicio > condicao.dataFim
      || condicao.dataInicio === null
      || condicao.dataFim === null
      || condicao.produto === '_default'
      || condicao.cartaMes === null
      || condicao.brand === '_default'
      || condicao.condicoes.length === 0
      || condicao.desconto > 100
      || condicao.desconto < 0
      || condicao.desconto === null
      || condicao.prazo <= 0
      || condicao.prazo === null
      || condicao.parcelas < 0
      || condicao.parcelas === null
      || condicao.coeficiente < 0
      || condicao.coeficiente === null
      || condicao.taxa < 0
      || condicao.taxa === null
    );
    if (isDuplicating) {
      return baseDisabled || !hasChanges;
    }
    return baseDisabled;
  },
);

export default {
  dataInicio,
  dataFim,
  dataAtual,
  selectMvsDisabled,
  actionButtonDisabled,
  concessionarias,
  selectConcessionariasSelecionadas,
  selectSelectedConcessionariasList,
  hasConcessionariasChanges,
  isValidDate,
  isMvsListEmpty,
  isSelectedBrand,
  selectSelectedMvsList,
  desconto,
  taxa,
  parcelas,
  prazo,
  coeficiente,
  condicaoOperacional,
  marca,
  hasChangesFromOriginal,
};
