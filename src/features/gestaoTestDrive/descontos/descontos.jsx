import React from 'react';
import PropTypes from 'prop-types';

import DescontoPage from './descontoPage';
import DescontoDetalhe from './descontoDetalhe';

import { Pages } from './redux/enums';

const Descontos = ({ page }) => (
  page === Pages.descontosPage
    ? <DescontoPage />
    : <DescontoDetalhe />
);

Descontos.propTypes = {
  page: PropTypes.string,
};

Descontos.defaultProps = {
  page: null,
};

export default Descontos;
