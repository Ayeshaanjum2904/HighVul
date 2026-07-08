import React from 'react';
import PropTypes from 'prop-types';

import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { trackedProperties } from 'modules';

const dictionary = () => ({
  singular: 'status',
  plural: 'status',
  type: 'o',
});

const statusArray = [
  { text: 'Ativos', value: '1' },
  { text: 'Inativos', value: '0 ' },
];

const SelectStatus = ({
  status, updateFiltersProperty, isLoading,
}) => (
  <NewMultipleSelectComponent
    dictionary={dictionary()}
    label="Status"
    dataCy="seletor-status"
    options={statusArray}
    selectedOption={status}
    setOption={(m) => {
      updateFiltersProperty('status', m === 'all' ? null : m);
    }}
    mixpanelPage={trackedProperties.gruposPage}
    mixpanelType="status"
    minWidth={200}
    height={165}
    disabled={isLoading}
    startWithAllSelected={false}
    showSearchInput={false}
  />
);

SelectStatus.propTypes = {
  status: PropTypes.any,
  updateFiltersProperty: PropTypes.func,
  isLoading: PropTypes.bool,
};

SelectStatus.defaultProps = {
  status: null,
  updateFiltersProperty: () => {},
  isLoading: false,
};

export default SelectStatus;
