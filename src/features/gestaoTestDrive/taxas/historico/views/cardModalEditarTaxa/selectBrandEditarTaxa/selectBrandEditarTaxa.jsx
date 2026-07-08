import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import './selectBrandEditarTaxa.scss';
import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';
import useFetch from 'hooks/useFetch';
import { camelFormat } from 'utils/format';
import service from '../../../../services/BrandService';

const useStyles = makeStyles({
  root: {
    width: '236px',
  },
});

const SelectBrandEditarTaxa = ({
  setBrand, brand, clearStateBrand,
}) => {
  const [{ loading, data }] = useFetch(() => service.getBrands());
  const formatMarca = camelFormat(brand) || null;
  const classes = useStyles();
  if (brand !== 'Fiat') {
    clearStateBrand();
  }
  return (
    <NewBasicSelect
      className={classes.root}
      data-cy="Select"
      nameLabel="Brand"
      placeholder="Selecionar brand"
      options={data}
      selectedOption={formatMarca ?? '_default'}
      setOption={(b) => {
        setBrand(b);
      }}
      renderAllOptions={false}
      isLoading={loading}
    />
  );
};

SelectBrandEditarTaxa.propTypes = {
  setBrand: PropTypes.func,
  clearStateBrand: PropTypes.func,
  brand: PropTypes.string,
};

SelectBrandEditarTaxa.defaultProps = {
  setBrand: () => { },
  clearStateBrand: () => { },
  brand: null,
};

export default SelectBrandEditarTaxa;
