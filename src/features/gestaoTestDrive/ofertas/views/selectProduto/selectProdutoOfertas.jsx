import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { dictonaryProduto } from 'common/controls/newMultipleSelectComponent/dictionary';

const SelectProdutoOfertas = ({
  produto, setProduto, produtos, isLoading,
}) => (
  <NewMultipleSelectComponent
    disabled={isLoading}
    options={produtos}
    setOption={(values) => {
      setProduto(values);
    }}
    selectedOption={produto}
    label="Produto"
    dictionary={dictonaryProduto}
    minWidth={236}
    mixpanelPage={trackedProperties.ofertasPage}
    mixpanelType="produto"
    dataCy="filter-produtos"
  />
);

SelectProdutoOfertas.propTypes = {
  produto: PropTypes.array,
  setProduto: PropTypes.func,
  produtos: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectProdutoOfertas.defaultProps = {
  produto: [],
  setProduto: () => {},
  produtos: [],
  isLoading: PropTypes.bool,
};

export default SelectProdutoOfertas;
