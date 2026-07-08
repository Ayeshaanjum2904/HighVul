import React from 'react';
import PropTypes from 'prop-types';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'status',
  plural: 'status',
  type: 'o',
});

const SelectStatus = ({
  status, setStatus, statusList,
}) => (
  <NewMultipleSelectComponent
    selectedOption={status}
    setOption={setStatus}
    options={statusList}
    dictionary={dictionary()}
    dataCy="status"
    label="Status"
  />
);

SelectStatus.propTypes = {
  status: PropTypes.array,
  setStatus: PropTypes.func.isRequired,
  statusList: PropTypes.array.isRequired,
};

SelectStatus.defaultProps = {
  status: [],
};

export default SelectStatus;
