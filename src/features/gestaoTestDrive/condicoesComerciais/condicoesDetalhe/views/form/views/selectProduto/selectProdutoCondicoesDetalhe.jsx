import React from 'react';
import PropTypes from 'prop-types';
import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';

const SelectProdutoCondicoesDetalhe = ({
  produto, setProduto, produtos, isLoading,
}) => (
  <NewBasicSelect
    nameLabel="Tipo de Produto"
    placeholder="Selecione o produto"
    dataCy="filter-produto"
    options={produtos}
    selectedOption={produto}
    setOption={setProduto}
    renderAllOptions={false}
    isLoading={isLoading}
  />
);

SelectProdutoCondicoesDetalhe.propTypes = {
  produto: PropTypes.number,
  setProduto: PropTypes.func,
  produtos: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectProdutoCondicoesDetalhe.defaultProps = {
  produto: null,
  setProduto: () => {},
  produtos: [],
  isLoading: false,
};

export default SelectProdutoCondicoesDetalhe;
