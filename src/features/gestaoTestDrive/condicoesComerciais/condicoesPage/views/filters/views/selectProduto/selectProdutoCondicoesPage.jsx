import React from 'react';
import PropTypes from 'prop-types';

import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'produto',
  plural: 'produtos',
  type: 'o',
});

const SelectProdutoCondicoesPage = ({
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

SelectProdutoCondicoesPage.propTypes = {
  produto: PropTypes.string,
  setProduto: PropTypes.func,
  produtos: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

SelectProdutoCondicoesPage.defaultProps = {
  produto: null,
  setProduto: () => {},
  produtos: [],
  isLoading: false,
};

export default SelectProdutoCondicoesPage;
