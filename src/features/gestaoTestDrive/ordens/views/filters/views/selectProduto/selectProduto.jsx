import React from 'react';
import PropTypes from 'prop-types';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { dictonaryProduto } from 'common/controls/newMultipleSelectComponent/dictionary';

const SelectProduto = ({
  produto, setProduto, produtosList,
}) => (
  <NewMultipleSelectComponent
    selectedOption={produto}
    setOption={setProduto}
    options={produtosList}
    dictionary={dictonaryProduto}
    dataCy="produto"
    label="Produto"
  />
);

SelectProduto.propTypes = {
  produto: PropTypes.array,
  setProduto: PropTypes.func,
  produtosList: PropTypes.array,
};

SelectProduto.defaultProps = {
  produto: [],
  setProduto: () => {},
  produtosList: [],
};

export default SelectProduto;
