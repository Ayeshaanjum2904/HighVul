import React from 'react';
import PropTypes from 'prop-types';

import GruposPage from './gruposPage';
import GruposDetalhe from './gruposDetalhe';

import { Pages } from '../../redux/enums';

const Grupos = ({ page }) => (
  page === Pages.listGrupos
    ? <GruposPage />
    : <GruposDetalhe />
);

Grupos.propTypes = {
  page: PropTypes.string,
};

Grupos.defaultProps = {
  page: null,
};

export default Grupos;
