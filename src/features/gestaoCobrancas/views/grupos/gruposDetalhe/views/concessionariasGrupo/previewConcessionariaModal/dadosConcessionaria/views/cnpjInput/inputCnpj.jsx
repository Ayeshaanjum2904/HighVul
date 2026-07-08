import React from 'react';
import PropTypes from 'prop-types';

import { formatCnpj } from 'utils/format';

import FormInput from 'common/controls/input/formInput';

const InputCnpj = ({
  cnpj,
}) => (
  <FormInput
    type="number"
    label="CNPJ"
    value={(cnpj)}
    format={formatCnpj}
    disabled
  />
);

InputCnpj.propTypes = {
  cnpj: PropTypes.string,
};

InputCnpj.defaultProps = {
  cnpj: '',
};

export default InputCnpj;
