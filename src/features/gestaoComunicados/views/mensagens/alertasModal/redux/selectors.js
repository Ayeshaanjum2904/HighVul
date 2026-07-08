import { createSelector } from 'reselect';
import _ from 'lodash';

const validateForm = createSelector(
  (state) => state?.alertas?.modal?.alerta,
  (state) => state?.alertas?.modal?.uploadImagem?.isLoading,
  (alerta) => (alerta.mensagem == null || alerta.titulo == null
                               || alerta.startDate == null || alerta.endDate == null
                               || _.isEmpty(alerta.selectedBrands)
  ),
);

export default {
  validateForm,
};
