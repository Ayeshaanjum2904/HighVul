import { createSelector } from 'reselect';
import _ from 'lodash';

const isDisabledCreate = createSelector(
  (state) => state?.historico?.updateVigencia?.vigenciaInicio,
  (state) => state?.historico?.updateVigencia?.vigenciaFim,
  (vigenciaInicio, vigenciaFim) => (_.isNull(vigenciaInicio) || _.isNull(vigenciaFim)
   || vigenciaFim < vigenciaInicio),
);

export default {
  isDisabledCreate,
};
