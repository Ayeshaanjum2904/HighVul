import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputConsultorFca = ({
  consultor,
}) => (
  <FormInput
    type="text"
    label="Consultor de Vendas FCA"
    value={consultor}
    disabled
  />
);

InputConsultorFca.propTypes = {
  consultor: PropTypes.string,
};

InputConsultorFca.defaultProps = {
  consultor: '',
};

export default InputConsultorFca;
