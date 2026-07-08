import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';
import { formatCodigoConcessionaria } from 'utils/format';

const InputBuc = ({
  buc,
}) => (
  <FormInput
    type="number"
    label="Código BUC"
    value={buc}
    format={formatCodigoConcessionaria}
    disabled
  />
);

InputBuc.propTypes = {
  buc: PropTypes.number,
};

InputBuc.defaultProps = {
  buc: null,
};

export default InputBuc;
