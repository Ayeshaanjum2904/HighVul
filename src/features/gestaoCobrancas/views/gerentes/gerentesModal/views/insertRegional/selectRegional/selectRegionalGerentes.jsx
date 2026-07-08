import React from 'react';
import PropTypes from 'prop-types';

import Select from 'common/controls/select';

const SelectRegionalGerentes = ({
  regional, setSelectedRegional, regionaisList,
}) => (
  <Select
    items={regionaisList}
    label="Regional"
    value={regional || null}
    onSelect={(value) => setSelectedRegional(value)}
    placeholder="Selecione uma regional"
  />
);

SelectRegionalGerentes.propTypes = {
  regional: PropTypes.any,
  setSelectedRegional: PropTypes.func,
  regionaisList: PropTypes.array,
};

SelectRegionalGerentes.defaultProps = {
  regional: null,
  setSelectedRegional: () => {},
  regionaisList: [],
};

export default SelectRegionalGerentes;
