import React from 'react';
import PropTypes from 'prop-types';

import VeiculosPage from './views/veiculosPage';
import VeiculosCadastro from './views/veiculosCadastro';

import { Pages } from './redux/enums';

const Veiculos = ({ page }) => (
  page === Pages.listVeiculo
    ? <VeiculosPage />
    : <VeiculosCadastro />
);

Veiculos.propTypes = {
  page: PropTypes.string,
};

Veiculos.defaultProps = {
  page: null,
};

export default Veiculos;
