import React from 'react';
import PropTypes from 'prop-types';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'produto',
  plural: 'produtos',
  type: 'o',
});
const SelectProdutoFilters = ({
  produto, setProduto, produtos, isLoading,
}) => (
  <NewMultipleSelectComponent
    options={produtos}
    setOption={setProduto}
    selectedOption={produto}
    label="Produto"
    disabled={isLoading}
    dictionary={dictionary()}
    dataCy="produto"
    minWidth={200}
  />
);

SelectProdutoFilters.propTypes = {
  produto: PropTypes.number,
  setProduto: PropTypes.func,
  produtos: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

SelectProdutoFilters.defaultProps = {
  produto: null,
  setProduto: () => {},
  produtos: [],
  isLoading: false,
};

export default SelectProdutoFilters;
