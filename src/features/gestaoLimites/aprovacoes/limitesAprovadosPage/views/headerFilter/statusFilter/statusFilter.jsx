import React from 'react';
import PropTypes from 'prop-types';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'status',
  plural: 'status',
  type: 'o',
});

const StatusFilter = ({
  status, setStatus, statusList, isLoading, permissionList,
}) => (
  <NewMultipleSelectComponent
    options={statusList}
    setOption={setStatus}
    selectedOption={status}
    label="Status"
    disabled={isLoading}
    dictionary={dictionary()}
    dataCy="status"
    minWidth={200}
    startWithAllSelected={permissionList.isAll}
  />
);

StatusFilter.propTypes = {
  status: PropTypes.array,
  setStatus: PropTypes.func,
  statusList: PropTypes.array,
  isLoading: PropTypes.bool,
  permissionList: PropTypes.func,
};

StatusFilter.defaultProps = {
  status: [],
  setStatus: () => {},
  statusList: [],
  isLoading: false,
  permissionList: () => {},
};

export default StatusFilter;
