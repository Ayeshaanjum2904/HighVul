import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const SelectProduto = ({
  listProdutos,
  getProdutosList,
  selectedProduto,
  setSelectedProduto,
  disabled,
}) => {
  useEffect(() => {
    if (listProdutos?.length === 0) getProdutosList();
  }, []);

  return (
    <NewBasicSelect
      nameLabel="Produto"
      renderAllOptions={false}
      width="100%"
      options={listProdutos}
      setOption={setSelectedProduto}
      selectedOption={selectedProduto || '_default'}
      disabled={disabled}
      placeholder="Selecione um produto"
    />
  );
};

SelectProduto.propTypes = {
  getProdutosList: PropTypes.func.isRequired,
  listProdutos: PropTypes.array,
  selectedProduto: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  setSelectedProduto: PropTypes.func,
  disabled: PropTypes.bool,
};

SelectProduto.defaultProps = {
  listProdutos: [],
  selectedProduto: null,
  setSelectedProduto: () => { },
  disabled: false,
};

export default SelectProduto;
