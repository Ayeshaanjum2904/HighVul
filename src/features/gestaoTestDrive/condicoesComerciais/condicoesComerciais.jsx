import React from 'react';
import PropTypes from 'prop-types';

import CondicoesPage from './condicoesPage';
import CondicoesDetalhe from './condicoesDetalhe';

import { Pages } from './redux/enums';

const CondicoesComerciais = ({ page }) => (
  page === Pages.condicoesPage
    ? <CondicoesPage />
    : <CondicoesDetalhe />
);

CondicoesComerciais.propTypes = {
  page: PropTypes.string,
};

CondicoesComerciais.defaultProps = {
  page: null,
};

export default CondicoesComerciais;
