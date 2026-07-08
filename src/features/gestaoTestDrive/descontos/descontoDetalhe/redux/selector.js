import { createSelector } from 'reselect';
import { formatDate } from 'utils/format';
import _ from 'lodash';
import moment from 'moment';

const dataInicio = createSelector(
  (state) => state.details.desconto?.dataInicio,
  (data) => (_.isEmpty(data) ? null : data),
);

const dataFim = createSelector(
  (state) => state.details.desconto?.dataFim,
  (data) => (_.isEmpty(data) ? null : data),
);

const dataAtual = createSelector(
  (state) => state.details.desconto?.dataInicio,
  (state) => state.details.desconto?.dataFim,
  (inicio, fim) => `Vigência: ${formatDate(inicio, 'DD MMM YYYY')} à ${formatDate(fim, 'DD MMM YYYY')}`,
);

const selectMvsDisabled = createSelector(
  (state) => state.details.mvsList,
  (state) => state.details.desconto.brand,
  (lista, marca) => (lista.length === 0 || marca === null),
);

const isValidDate = createSelector(
  (state) => state.details.desconto?.dataFim,
  (state) => state.details.desconto?.dataInicio,
  (fim, inicio) => (moment.isMoment(fim) && moment.isMoment(inicio) ? inicio.isAfter(fim) : false),
);

const isMvsListEmpty = createSelector(
  (state) => state.details.mvsList,
  (state) => state.details.desconto.brand,
  (state) => state.details.isLoadingMvsList,
  (state) => state.details.isErrorMvsList,
  (lista, marca, isLoading, isError) => (lista.length === 0 && marca !== null
&& !isLoading && !isError),
);

const isSelectedBrand = createSelector(
  (state) => state.details.desconto.brand,
  (brand) => _.isNull(brand),
);

const selectSelectedMvsList = createSelector(
  (state) => state.details?.mvsList,
  (state) => state.details.desconto?.descontos,
  (mvsList, descontos) => (_.isNull(descontos)
    ? null
    : mvsList.map((m) => {
      if (descontos.findIndex((d) => d.value === m.value) >= 0) return m.value;
      return null;
    })),
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
  (state) => state.details.desconto,
  (state) => state.details.originalDesconto,
  (state) => state.details.originalConcessionarias,
  (state) => state.details.concessionariasSelecionadas,
  (currentDesconto, originalDesconto, originalConcessionarias, concessionariasSelecionadas) => {
    if (!originalDesconto) return false;

    const safeCompare = (current, original) => {
      if (current == null && original == null) return true;
      if (current == null || original == null) return false;
      return String(current) === String(original);
    };

    const fieldsToCompare = ['dve', 'brand', 'produto', 'descontoGlobal'];

    const hasFieldChanges = fieldsToCompare.some(
      (field) => !safeCompare(currentDesconto[field], originalDesconto[field]),
    );
    if (hasFieldChanges) return true;

    if (currentDesconto.dataInicio && originalDesconto.dataInicio) {
      if (!moment(currentDesconto.dataInicio).isSame(originalDesconto.dataInicio, 'day')) {
        return true;
      }
    }

    if (currentDesconto.dataFim && originalDesconto.dataFim) {
      if (!moment(currentDesconto.dataFim).isSame(originalDesconto.dataFim, 'day')) {
        return true;
      }
    }

    if (currentDesconto.descontos?.length !== originalDesconto.descontos?.length) {
      return true;
    }

    const normalizeValue = (value) => {
      if (value == null) return null;
      return String(value);
    };

    const currentValues = currentDesconto.descontos?.map((d) => ({
      value: normalizeValue(d.value),
      valor: normalizeValue(d.valor),
    })) || [];
    const originalValues = originalDesconto.descontos?.map((d) => ({
      value: normalizeValue(d.value),
      valor: normalizeValue(d.valor),
    })) || [];

    if (!_.isEqual(currentValues, originalValues)) return true;

    return !_.isEqual(originalConcessionarias, concessionariasSelecionadas);
  },
);

const actionButtonDisabled = createSelector(
  (state) => state.details.desconto,
  (state) => state.details.originalDesconto,
  hasChangesFromOriginal,
  (desconto, originalDesconto, hasChanges) => {
    const isDuplicating = !!originalDesconto;
    const baseDisabled = (
      desconto.dataInicio > desconto.dataFim
      || desconto.dataInicio === null
      || desconto.dataFim === null
      || desconto.produto === null
      || desconto.dve === null
      || desconto.brand === null
      || desconto.descontos.length === 0
      || desconto.descontoGlobal === null
      || Number.isNaN(desconto.descontoGlobal)
      || desconto.descontoGlobal > 100
      || desconto.descontoGlobal <= 0
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
  isValidDate,
  isMvsListEmpty,
  isSelectedBrand,
  selectSelectedMvsList,
  hasChangesFromOriginal,
  concessionarias,
  selectConcessionariasSelecionadas,
  selectSelectedConcessionariasList,
  hasConcessionariasChanges,
};
