import React from 'react';
import PropTypes from 'prop-types';

import { formatCnpj } from 'utils/format';

import FormatNumber from 'common/controls/input/formInput/';

const InputConcessionariaCnpj = ({
  concessionariaCnpj,
}) => (
  <FormatNumber
    type="number"
    label="CNPJ"
    value={(concessionariaCnpj)}
    format={formatCnpj}
    disabled
  />
);

InputConcessionariaCnpj.propTypes = {
  concessionariaCnpj: PropTypes.string,

};

InputConcessionariaCnpj.defaultProps = {
  concessionariaCnpj: '',

};

export default InputConcessionariaCnpj;
