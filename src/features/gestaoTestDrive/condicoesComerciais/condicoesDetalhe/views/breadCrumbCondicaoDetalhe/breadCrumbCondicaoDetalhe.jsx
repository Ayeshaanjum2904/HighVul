import React from 'react';
import PropTypes from 'prop-types';

import BreadCrumb from 'common/layout/breadCrumb';

import { PATH_GESTAO_TEST_DRIVE } from 'routes/paths';

const BreadCrumbCondicaoDetalhe = ({ lastPage }) => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Test Drive',
      path: ' ',
    },
    {
      label: 'Parâmetros',
      path: '',
      disabled: true,
    },
    {
      label: 'Condições Comerciais',
      path: `${PATH_GESTAO_TEST_DRIVE}/condicoes-comerciais`,
    },
    {
      label: lastPage,
      path: '',
    }]}
  />
);

BreadCrumbCondicaoDetalhe.propTypes = {
  lastPage: PropTypes.string,
};

BreadCrumbCondicaoDetalhe.defaultProps = {
  lastPage: '',
};

export default BreadCrumbCondicaoDetalhe;
