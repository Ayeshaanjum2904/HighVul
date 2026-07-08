import React from 'react';
import PropTypes from 'prop-types';
import useFetch from 'hooks/useFetch';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import service from '../../services/BrandService';

const SelectBrand = ({ selectedBrands, setBrands }) => {
  const [{ loading, data }] = useFetch(() => service.getBrands());

  return (
    <NewMultipleSelectComponent
      label="Brand"
      dataCy="seletor-alerta-brand"
      selectedOption={selectedBrands}
      setOption={setBrands}
      options={data}
      startWithAllSelected={false}
      disabled={loading}
      openMenuTop
    />
  );
};

SelectBrand.propTypes = {
  setBrands: PropTypes.func,
  selectedBrands: PropTypes.array,
};

SelectBrand.defaultProps = {
  setBrands: () => { },
  selectedBrands: [],
};
export default SelectBrand;
