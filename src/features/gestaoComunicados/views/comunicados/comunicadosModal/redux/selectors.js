import { createSelector } from 'reselect';
import _ from 'lodash';

const isPreviewComunicadoDisabled = createSelector(
  (state) => state.comunicados.modal.urlFile,
  (state) => state.comunicados.modal.isLoading,
  (urlFile, isLoading) => (isLoading || urlFile === null),
);

const selectFormattedBrands = createSelector(
  (state) => state.comunicados.modal.brands,
  (state) => state.comunicados.modal.selectors.brands,
  (selectedBrands, brandsList) => selectedBrands.map((selectedValue) => {
    const brand = brandsList.find((b) => b.value === selectedValue);
    return brand ? brand.label : null;
  }).filter((label) => label !== null),

);

const isDisabled = createSelector(
  (state) => state.comunicados.modal.documento,
  (state) => state.comunicados.modal.urlFile,
  (state) => state.comunicados.modal.brands,
  (state) => state.comunicados.modal.dataEmissao,
  (state) => state.comunicados.modal.fileName,
  (documento, urlFile, brands, dataEmissao, fileName) => (_.isNull(documento) || brands === '_default'
|| _.isNull(brands) || _.isNull(urlFile) || _.isNull(dataEmissao) || _.isNull(fileName)),
);

const selectChip = createSelector(
  (state) => state.comunicados.modal.brands,
  (state) => state.comunicados.modal.selectors.brands,
  (selected, brandList) => (brandList.filter((b) => b.value === selected)),
);

const isDisabledFile = createSelector(
  (state) => state.comunicados.modal.fileName,
  (state) => state.comunicados.modal.isLoading,
  (fileName, isLoading) => (isLoading || _.isNull(fileName) || _.isUndefined(fileName)),
);

const selectTipoDocumento = createSelector(
  (state) => state.comunicados.modal.selectors.documentos,
  (state) => state.comunicados.modal.documento,
  (documentos, documento) => documentos.find((d) => d.value === documento).text,
);

export default {
  isPreviewComunicadoDisabled,
  selectFormattedBrands,
  isDisabled,
  selectTipoDocumento,
  isDisabledFile,
  selectChip,
};
