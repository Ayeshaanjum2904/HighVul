import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'status',
  plural: 'status',
  type: 'o',
});

const SelectStatusVeiculosPage = ({
  status, setStatus, statusList, isLoading,
}) => (
  <NewMultipleSelectComponent
    dictionary={dictionary()}
    label="Status"
    dataCy="seletor-status"
    options={statusList}
    selectedOption={status}
    setOption={(s) => {
      setStatus(s === 'all' ? null : s);
    }}
    mixpanelPage={trackedProperties.veiculosPage}
    mixpanelType="status"
    minWidth={200}
    disabled={isLoading}
    startWithAllSelected
    showSearchInput={false}
  />
);

SelectStatusVeiculosPage.propTypes = {
  status: PropTypes.array,
  setStatus: PropTypes.func,
  statusList: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectStatusVeiculosPage.defaultProps = {
  status: [],
  setStatus: () => {},
  statusList: null,
  isLoading: false,
};

export default SelectStatusVeiculosPage;
