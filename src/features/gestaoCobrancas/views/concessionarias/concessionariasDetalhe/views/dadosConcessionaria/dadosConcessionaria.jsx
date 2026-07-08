import React from 'react';
import PropTypes from 'prop-types';

import List, { ListContent } from 'common/layout/list';
import ResumoConcessionaria from '../resumoConcessionaria';
import ResumoJeepBank from '../resumoJeepbank';

const DadosConcessionaria = ({ isLoading, isError, brand }) => (
  <List
    isLoading={isLoading}
    isError={isError}
  >
    <ListContent>
      <ResumoConcessionaria />
      {(brand !== 'PEUGEOT' && brand !== 'CITROEN' && brand !== 'LEAP') && <ResumoJeepBank />}
    </ListContent>

    <ListContent type="error">
      Ocorreu um erro ao carregar as concessionária.
    </ListContent>
  </List>
);

DadosConcessionaria.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  brand: PropTypes.string,
};

DadosConcessionaria.defaultProps = {
  isLoading: false,
  isError: false,
  brand: '',
};

export default DadosConcessionaria;
