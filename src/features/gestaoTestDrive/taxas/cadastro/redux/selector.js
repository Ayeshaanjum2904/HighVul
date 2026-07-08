import { createSelector } from 'reselect';
import _ from 'lodash';

const isDisabledCreate = createSelector(
  (state) => state?.cadastro?.inputData?.inicioVigencia,
  (state) => state?.cadastro?.inputData?.fimVigencia,
  (state) => state?.cadastro?.inputData?.brand,
  (state) => state?.cadastro?.isFormOpen,
  (inicioVigencia, fimVigencia, brand, isFormOpen) => (
    _.isNull(inicioVigencia) || _.isNull(fimVigencia) || _.isNull(brand)
    || fimVigencia < inicioVigencia || isFormOpen
  ),
);

const isNeedOpenModal = createSelector(
  (state) => state?.cadastro?.inputData?.inicioVigencia,
  (state) => state?.cadastro?.inputData?.fimVigencia,
  (state) => state?.cadastro?.inputData?.brand,
  (inicioVigencia, fimVigencia, brand) => (!_.isNull(inicioVigencia) || !_.isNull(fimVigencia)
|| !_.isNull(brand)),
);

const isFormValid = createSelector(
  (state) => state,
  (taxa) => {
    const {
      brand, inicioVigencia, fimVigencia, ...taxasPraticadas
    } = taxa;
    if (_.isNull(brand) || _.isEmpty(brand) || _.isNull(inicioVigencia) || _.isEmpty(inicioVigencia)
      || _.isNull(fimVigencia) || _.isEmpty(fimVigencia)) return false;

    let umaTaxaValida = false;
    const formularioValido = Object.values(taxasPraticadas).every((valor, index, lista) => {
      if (index % 2 !== 0) return true;

      const praticada = lista[index + 1];
      if ((valor && !praticada) || (!valor && praticada)) return false;
      if (!umaTaxaValida && (valor && praticada)) umaTaxaValida = true;
      return true;
    });

    return formularioValido && umaTaxaValida;
  },
);

export default {
  isDisabledCreate,
  isNeedOpenModal,
  isFormValid,
};
