import React from 'react';
import PropTypes from 'prop-types';

import TextFilterDebounce from 'common/controls/textFilterDebounce';

const InputBuc = ({
  buc, setBuc, isLoading,
}) => (
  <TextFilterDebounce
    label="Código BUC"
    placeholder="Cód. BUC"
    value={buc}
    setValue={setBuc}
    disabled={isLoading}
    showSearchIcon
  />
);

InputBuc.propTypes = {
  buc: PropTypes.string,
  setBuc: PropTypes.func,
  isLoading: PropTypes.bool,

};

InputBuc.defaultProps = {
  buc: '',
  setBuc: () => {},
  isLoading: false,

};

export default InputBuc;
