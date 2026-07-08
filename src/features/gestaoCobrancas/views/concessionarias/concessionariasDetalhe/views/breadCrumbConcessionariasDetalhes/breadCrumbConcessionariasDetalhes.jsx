import React from 'react';
import PropTypes from 'prop-types';

import BreadCrumb from 'common/layout/breadCrumb';

import { PATH_COBRANCAS } from 'routes/paths';

const BreadCrumbConcessionariasDetalhes = ({ nomeConcessionaria }) => (
  <BreadCrumb
    labels={[{
      label: 'Cobranças',
      path: ' ',
    },
    {
      label: 'Concessionárias',
      path: `${PATH_COBRANCAS}/concessionarias`,
    },
    {
      label: nomeConcessionaria,
      path: '',
    }]}
  />
);

BreadCrumbConcessionariasDetalhes.propTypes = {
  nomeConcessionaria: PropTypes.string,
};

BreadCrumbConcessionariasDetalhes.defaultProps = {
  nomeConcessionaria: null,
};

export default BreadCrumbConcessionariasDetalhes;
