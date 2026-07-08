import React from 'react';
import PropTypes from 'prop-types';

import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';
import { Mixpanel, trackedProperties } from 'modules';

const statusArray = [
  { label: 'Ativos', value: 'True' },
  { label: 'Inativos', value: 'False' },
];

const SelectStatusOfertas = ({
  status, setStatus, isLoading,
}) => (
  <NewBasicSelect
    options={statusArray}
    setOption={(value) => {
      setStatus(value);
      Mixpanel.trackPageFilter(trackedProperties.ofertasPage, 'status');
    }}
    selectedOption={status}
    isLoading={isLoading}
    nameLabel="Status"
    dataCy="filter-status"
    minWidth={200}
    labelAll="Todos os status"
    renderAllOptions
    placeholder="Selecione um status"
  />
);

SelectStatusOfertas.propTypes = {
  status: PropTypes.any,
  setStatus: PropTypes.func,
  isLoading: PropTypes.bool,
};

SelectStatusOfertas.defaultProps = {
  status: null,
  setStatus: () => {},
  isLoading: false,
};

export default SelectStatusOfertas;
