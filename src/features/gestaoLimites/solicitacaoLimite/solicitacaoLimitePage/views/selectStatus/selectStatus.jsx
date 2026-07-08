import React from 'react';
import PropTypes from 'prop-types';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'status',
  plural: 'status',
  type: 'o',
});

const SelectStatus = ({
  status, setStatus, statusList, isLoading,
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
  />
);

SelectStatus.propTypes = {
  status: PropTypes.array,
  setStatus: PropTypes.func,
  statusList: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectStatus.defaultProps = {
  status: [],
  setStatus: () => {},
  statusList: [],
  isLoading: false,
};

export default SelectStatus;
