import React from 'react';
import PropTypes from 'prop-types';

import MultSelect from 'common/controls/multSelect/multSelect';
import { trackedProperties } from 'modules';

const dictionary = () => ({
  singular: 'brand',
  plural: 'brands',
  type: 'a',
});
const SelectMarcaPedidosPage = ({
  marca, setMarca, brandsList, isLoading, setIsFirstPageLoad,
}) => (
  <MultSelect
    dictionary={dictionary()}
    label="Brand"
    dataCy="seletor-marca"
    selectedOption={marca}
    onSelected={setIsFirstPageLoad}
    setOption={setMarca}
    options={brandsList}
    mixpanelPage={trackedProperties.pedidosPage}
    mixpanelType="brand"
    minWidth={200}
    disabled={isLoading}
  />
);

SelectMarcaPedidosPage.propTypes = {
  marca: PropTypes.array,
  setMarca: PropTypes.func,
  setIsFirstPageLoad: PropTypes.func,
  brandsList: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectMarcaPedidosPage.defaultProps = {
  marca: [],
  setMarca: () => {},
  setIsFirstPageLoad: () => {},
  brandsList: [],
  isLoading: false,
};

export default SelectMarcaPedidosPage;
