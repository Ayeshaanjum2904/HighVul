import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'status',
  plural: 'status',
  type: 'o',
});

const SelectStatusPedidosPage = ({
  status, setStatus, statusList, isLoading, setIsFirstPageLoad,
}) => (
  <NewMultipleSelectComponent
    options={statusList}
    setOption={setStatus}
    onSelected={setIsFirstPageLoad}
    selectedOption={status}
    label="Status"
    mixpanelPage={trackedProperties.pedidosPage}
    mixpanelType="status"
    disabled={isLoading}
    dictionary={dictionary()}
    dataCy="status"
    minWidth={300}
  />
);

SelectStatusPedidosPage.propTypes = {
  status: PropTypes.array,
  setStatus: PropTypes.func.isRequired,
  setIsFirstPageLoad: PropTypes.func,
  statusList: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectStatusPedidosPage.defaultProps = {
  status: [],
  setIsFirstPageLoad: () => {},
  statusList: [],
  isLoading: false,
};

export default SelectStatusPedidosPage;
