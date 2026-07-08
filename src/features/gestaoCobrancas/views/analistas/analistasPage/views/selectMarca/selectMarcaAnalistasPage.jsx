import React from 'react';
import PropTypes from 'prop-types';

import { Mixpanel, trackedProperties } from 'modules';
import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';

const SelectMarcaAnalistasPage = ({
  selectedMarca, setMarca, marcas, isLoading,
}) => (
  <NewBasicSelect
    options={marcas}
    setOption={(value) => setMarca(value === 'all' ? null : value)}
    selectedOption={selectedMarca ?? 'all'}
    nameLabel="Brand"
    dataCy="filter-brand"
    labelAll="Todas as brands"
    renderAllOptions
    placeholder="Selecione uma brand"
    tracking={() => Mixpanel.trackPageFilter(trackedProperties.analistasPage, 'brand')}
    isLoading={isLoading}
  />
);

SelectMarcaAnalistasPage.propTypes = {
  selectedMarca: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  setMarca: PropTypes.func,
  marcas: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectMarcaAnalistasPage.defaultProps = {
  selectedMarca: null,
  setMarca: () => {},
  marcas: null,
  isLoading: false,
};

export default SelectMarcaAnalistasPage;
