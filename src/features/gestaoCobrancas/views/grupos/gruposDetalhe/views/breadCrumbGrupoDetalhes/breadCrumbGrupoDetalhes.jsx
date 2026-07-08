import React from 'react';
import PropTypes from 'prop-types';

import BreadCrumb from 'common/layout/breadCrumb';
import { PATH_COBRANCAS } from 'routes/paths';

const BreadCrumbGrupoDetalhes = ({ nomeConta }) => (
  <BreadCrumb
    labels={[{
      label: 'Cobranças',
      path: ' ',
    },
    {
      label: 'Grupos',
      path: `${PATH_COBRANCAS}/grupos`,
    },
    {
      label: nomeConta,
      path: '',
    }]}
  />
);

BreadCrumbGrupoDetalhes.propTypes = {
  nomeConta: PropTypes.string,
};

BreadCrumbGrupoDetalhes.defaultProps = {
  nomeConta: null,
};

export default BreadCrumbGrupoDetalhes;
