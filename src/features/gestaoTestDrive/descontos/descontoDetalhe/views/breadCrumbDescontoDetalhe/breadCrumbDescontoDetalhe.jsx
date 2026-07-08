import React from 'react';
import PropTypes from 'prop-types';

import BreadCrumb from 'common/layout/breadCrumb';

import { PATH_GESTAO_TEST_DRIVE } from 'routes/paths';

const BreadCrumbDescontoDetalhe = ({ lastPage }) => (
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
      label: 'Condição à vista',
      path: `${PATH_GESTAO_TEST_DRIVE}/descontos`,
    },
    {
      label: lastPage,
      path: '',
    }]}
  />
);

BreadCrumbDescontoDetalhe.propTypes = {
  lastPage: PropTypes.string,
};

BreadCrumbDescontoDetalhe.defaultProps = {
  lastPage: '',
};

export default BreadCrumbDescontoDetalhe;
