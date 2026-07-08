import React from 'react';
import PropTypes from 'prop-types';

import { Mixpanel, trackedProperties } from 'modules';
import TextFilterDebounce from 'common/controls/textFilterDebounce';

const BucFilter = ({ codigoBuc, setCodigoBuc, debouncedForceReload }) => (
  <TextFilterDebounce
    label="Ponto de Venda"
    placeholder="Insira o código BUC ou razão social"
    value={codigoBuc}
    setValue={setCodigoBuc}
    onChange={() => {
      Mixpanel.trackPageFilter(trackedProperties.dashboardPage, 'codBuc');
      debouncedForceReload();
    }}
  />
);

BucFilter.propTypes = {
  setCodigoBuc: PropTypes.func,
  codigoBuc: PropTypes.string,
  debouncedForceReload: PropTypes.func,
};

BucFilter.defaultProps = {
  setCodigoBuc: () => {},
  debouncedForceReload: () => {},
  codigoBuc: '',
};

export default BucFilter;
