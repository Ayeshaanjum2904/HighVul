import { createSelector } from 'reselect';
import _ from 'lodash';

import { camelFormat } from 'utils/format';

const mapModelos = createSelector(
  (state) => state?.cadastroVeiculo?.modelos,
  (modelos) => (modelos || []).map((m) => ({
    value: m.id,
    text: `${m.codigoModelo} • ${camelFormat(m.descricaoModelo)}`,
    urlModelo: m.urlModelo,
  })),
);

const isSendEnabled = createSelector(
  (state) => state?.cadastroVeiculo?.veiculo,
  (veiculo) => {
    const camposFaltando = (
      !veiculo.marca || !veiculo.codigoModelo || !veiculo.codigoVersao
    || !veiculo.codigoSerie || !veiculo.descricaoVersao
    || !veiculo.nomeComercial || !veiculo.modelYear || !veiculo.allestimento
    || !veiculo.marca || !veiculo.valor
    );

    let valorExcedeLimite = false;
    if (veiculo.valor) {
      let numericValue;
      if (typeof veiculo.valor === 'string') {
        const cleanValue = veiculo.valor.replace(/[^\d.,]/g, '');
        const normalizedValue = cleanValue.replace(',', '.');
        numericValue = parseFloat(normalizedValue);
      } else {
        numericValue = parseFloat(veiculo.valor);
      }

      valorExcedeLimite = !Number.isNaN(numericValue) && numericValue > 99999999.99;
    }

    return camposFaltando || valorExcedeLimite;
  },
);

const showWarningUpload = createSelector(
  (state) => state?.cadastroVeiculo?.uploadImagem?.urlImagem,
  (state) => state?.cadastroVeiculo?.urlVeiculosList,
  (state) => state?.cadastroVeiculo?.veiculo?.urlVeiculo,
  (urlImagem, urlVeiculosList, urlVeiculo) => (_.includes(urlVeiculo, urlVeiculosList)
                                            && urlImagem !== null),
);

const selectButtonTittle = createSelector(
  (state) => state?.cadastroVeiculo?.veiculo?.id,
  (idVeiculo) => (_.isNull(idVeiculo) ? 'Cadastrar Veículo' : 'Editar Veículo'),
);

const selectPageTitle = createSelector(
  (state) => state?.cadastroVeiculo?.veiculo?.id,
  (idVeiculo) => (_.isNull(idVeiculo) ? 'Cadastro de veículo' : 'Editar Veículo'),
);

const selectUrlVeiculo = createSelector(
  (state) => state?.cadastroVeiculo?.veiculo?.urlVeiculo,
  (state) => state?.cadastroVeiculo?.veiculo?.urlModelo,
  (state) => state?.cadastroVeiculo?.uploadImagem?.urlDownload,
  (urlVeiculo, urlModelo, urlDownload) => (urlDownload ?? urlVeiculo ?? urlModelo),
);

const validateValorMaximo = createSelector(
  (state) => state.cadastroVeiculo?.veiculo?.valor,
  (valor) => {
    if (valor === null || valor === undefined || valor === '') {
      return true;
    }

    let numericValue;

    if (typeof valor === 'string') {
      const cleanValue = valor.replace(/[^\d.,]/g, '');
      const normalizedValue = cleanValue.replace(',', '.');

      numericValue = parseFloat(normalizedValue);
    } else {
      numericValue = parseFloat(valor);
    }

    return !Number.isNaN(numericValue) && numericValue <= 99999999.99;
  },
);

export default {
  mapModelos,
  isSendEnabled,
  showWarningUpload,
  selectButtonTittle,
  selectPageTitle,
  selectUrlVeiculo,
  validateValorMaximo,
};
