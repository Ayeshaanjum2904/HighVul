import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';
import { camelFormat } from 'utils/format';

const InputContaPai = ({
  contaPai,
}) => (
  <FormInput
    type="text"
    label="Conta Pai"
    value={camelFormat(contaPai)}
    disabled
  />
);

InputContaPai.propTypes = {
  contaPai: PropTypes.string,
};

InputContaPai.defaultProps = {
  contaPai: '',
};

export default InputContaPai;
