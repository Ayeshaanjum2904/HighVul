import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';
import { PATH_GESTAO_LIMITES } from 'routes/paths';

const BreadCrumbCadastro = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de limites',
      path: ' ',
    },
    {
      label: 'Limites aprovados',
      path: `${PATH_GESTAO_LIMITES}/aprovacoes/limites-aprovados`,
    },
    {
      label: 'Lista de documentos',
      path: true,
    }]}
  />
);

export default BreadCrumbCadastro;
