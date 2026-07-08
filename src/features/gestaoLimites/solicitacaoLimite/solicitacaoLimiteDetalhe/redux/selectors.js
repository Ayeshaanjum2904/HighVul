import { createSelector } from 'reselect';
import _ from 'lodash';

import { formatDate } from 'utils/format';

import statusEnum from '../status';

const isErrorUpdateStatus = (state) => state?.details?.updateStatus?.isError;
const isErrorComentario = (state) => state?.details?.sendComentario?.isError;

const isError = createSelector(
  isErrorUpdateStatus,
  isErrorComentario,
  (
    isErrorUpdate,
    isErrorComent,
  ) => (isErrorUpdate || isErrorComent),
);

const gruposSolicitacoes = createSelector(
  (state) => state?.details?.modal?.detalheSolicitacao?.comentarios,
  (comentarios) => {
    const grupos = new Map();
    (comentarios || []).forEach((p) => {
      if (!_.isDate(p?.data)) { return; }

      const date = formatDate(p.data, 'DD MMM YYYY');
      if (grupos.has(date)) {
        const comentariosForDate = grupos.get(date);
        comentariosForDate.push(p);
      } else {
        grupos.set(date, [p]);
      }
    });

    const result = [];
    grupos.forEach((comentariosForDate, date) => {
      result.push({
        label: date,
        comentarios: comentariosForDate,
      });
    });
    return result;
  },
);

const validateAlteracaoValor = createSelector((state) => state?.details?.modal, (modal) => {
  const {
    novoValor, motivo, detalheSolicitacao, isAlteracaoValor,
  } = modal;
  const { valor } = detalheSolicitacao;

  if (isAlteracaoValor && (novoValor > valor || motivo?.length < 6 || motivo == null)) {
    return true;
  }
  return false;
});

const validateNovoValor = createSelector((state) => state?.details?.modal, (modal) => {
  const {
    novoValor, isAlteracaoValor, detalheSolicitacao,
  } = modal;
  const { valor } = detalheSolicitacao;

  if (isAlteracaoValor && novoValor > valor && novoValor != null) {
    return false;
  }
  return true;
});

const isTransferencia = createSelector(
  (state) => state?.details?.modal?.detalheSolicitacao?.status,
  (status) => {
    if (status === statusEnum.transfAguardandoAnalise
        || status === statusEnum.transfConcluido
        || status === statusEnum.transfReprovado) {
      return true;
    }
    return false;
  },
);

const isAlteracao = createSelector(
  (state) => state?.details?.modal?.detalheSolicitacao?.status,
  (status) => {
    if (status === statusEnum.altAguardandoAnalise
      || status === statusEnum.altAguardandoEfetivacao
      || status === statusEnum.altConcluido
      || status === statusEnum.altReprovado) {
      return true;
    }
    return false;
  },
);

const isAnaliseCredito = createSelector(
  (state) => state?.details?.modal?.detalheSolicitacao?.status,
  (status) => {
    if (status === statusEnum.altAguardandoAnalise
      || status === statusEnum.transfAguardandoAnalise) {
      return true;
    }
    return false;
  },
);

export default {
  gruposSolicitacoes,
  isError,
  validateAlteracaoValor,
  validateNovoValor,
  isTransferencia,
  isAlteracao,
  isAnaliseCredito,
};
