import React from 'react';
import BreadCrumb from 'common/layout/breadCrumb';
import { PATH_GESTAO_TEST_DRIVE } from 'routes/paths';

const BreadCrumbCadastro = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Test Drive',
      path: ' ',
    },
    {
      label: 'Gestão de Taxas',
      disabled: true,
    },
    {
      label: 'Histórico de Taxas',
      path: `${PATH_GESTAO_TEST_DRIVE}/taxas/historico`,
    },
    {
      label: 'Cadastro de nova taxa',
      disabled: true,
    }]}
  />
);
export default BreadCrumbCadastro;
