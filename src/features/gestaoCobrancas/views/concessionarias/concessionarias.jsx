import React from 'react';
import PropTypes from 'prop-types';

import ConcessionariasPage from './concessionariasPage';
import ConcessionariasDetalhe from './concessionariasDetalhe';

import { Pages } from '../../redux/enums';

const Concessionarias = ({ page }) => (
  page === Pages.listConcessionarias
    ? <ConcessionariasPage />
    : <ConcessionariasDetalhe />
);

Concessionarias.propTypes = {
  page: PropTypes.string,
};

Concessionarias.defaultProps = {
  page: null,
};

export default Concessionarias;
