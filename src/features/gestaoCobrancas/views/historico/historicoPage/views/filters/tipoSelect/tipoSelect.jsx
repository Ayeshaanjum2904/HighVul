import React from 'react';
import PropTypes from 'prop-types';

import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { trackedProperties } from 'modules';

const dictionary = () => ({
  singular: 'tipo',
  plural: 'tipos',
  type: 'o',
});

const TipoSelect = ({
  tipo, setTipo, tipoList, isLoading,
}) => (
  <NewMultipleSelectComponent
    options={tipoList}
    setOption={(r) => {
      setTipo(r === 'all' ? null : r);
    }}
    selectedOption={tipo}
    label="Tipo"
    dictionary={dictionary()}
    mixpanelPage={trackedProperties.historicoPage}
    mixpanelType="tipo"
    disabled={isLoading}
    dataCy="tipoSelect"
    minWidth={200}
    height={200}
    showSearchInput={false}
    startWithAllSelected={false}
  />
);

TipoSelect.propTypes = {
  tipo: PropTypes.array,
  setTipo: PropTypes.func,
  tipoList: PropTypes.array,
  isLoading: PropTypes.bool,
};

TipoSelect.defaultProps = {
  tipo: null,
  setTipo: () => {},
  tipoList: null,
  isLoading: false,
};

export default TipoSelect;
