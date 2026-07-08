import React from 'react';
import PropTypes from 'prop-types';

import Select from 'common/controls/select';

const SelectRegionalAnalistasModal = ({
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

SelectRegionalAnalistasModal.propTypes = {
  regional: PropTypes.any,
  setSelectedRegional: PropTypes.func,
  regionaisList: PropTypes.array,
};

SelectRegionalAnalistasModal.defaultProps = {
  regional: null,
  setSelectedRegional: () => {},
  regionaisList: [],
};

export default SelectRegionalAnalistasModal;
