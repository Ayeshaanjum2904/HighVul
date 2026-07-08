import React from 'react';
import PropTypes from 'prop-types';

import './selectBrand.scss';
import useFetch from 'hooks/useFetch';
import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';
import { camelFormat } from 'utils/format';
import service from '../../../../services/BrandService';

const SelectBrand = ({
  setBrand, brand,
}) => {
  const [{ loading, data }] = useFetch(() => service.getBrands());
  const formatMarca = camelFormat(brand) || null;
  return (
    <NewBasicSelect
      renderAllOptions={false}
      dataCy="Select"
      options={data}
      placeholder="Selecionar brand"
      nameLabel="Brand"
      selectedOption={formatMarca ?? '_default'}
      isLoading={loading}
      setOption={(b) => {
        setBrand(b);
      }}
    />
  );
};

SelectBrand.propTypes = {
  setBrand: PropTypes.func,
  brand: PropTypes.string,
};

SelectBrand.defaultProps = {
  setBrand: () => { },
  brand: null,
};

export default SelectBrand;
