import React from 'react';
import PropTypes from 'prop-types';

import BreadCrumb from 'common/layout/breadCrumb';
import { PATH_GESTAO_TEST_DRIVE } from 'routes/paths';

const BreadCrumbCadastroVeiculos = ({ title }) => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Test Drive',
      path: ' ',
    },
    {
      label: 'Veiculos',
      path: `${PATH_GESTAO_TEST_DRIVE}/veiculos`,
    },
    {
      label: title,
      path: ' ',
    }]}
  />
);

BreadCrumbCadastroVeiculos.propTypes = {
  title: PropTypes.string,
};

BreadCrumbCadastroVeiculos.defaultProps = {
  title: null,
};

export default BreadCrumbCadastroVeiculos;
