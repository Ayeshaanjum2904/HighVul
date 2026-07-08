import { createSelector } from 'reselect';

const destinatariosFormated = createSelector(
  (state) => state?.historico?.details?.historicoDetail?.destinatarios,
  (destinatarios) => (destinatarios ? destinatarios.replaceAll(';', '; ') : null),
);

export default {
  destinatariosFormated,
};
