import React from 'react';
import PropTypes from 'prop-types';

import MultSelect from 'common/controls/multSelect/multSelect';

const dictionary = () => ({
  singular: 'produto',
  plural: 'produtos',
  type: 'o',
});

const ProductFilter = ({
  produto, setProduto, produtos, isLoading,
}) => (
  <MultSelect
    dictionary={dictionary()}
    label="Produto"
    dataCy="seletor-produto"
    selectedOption={produto}
    setOption={setProduto}
    options={produtos}
    disabled={isLoading}
    minWidth={200}
  />
);

ProductFilter.propTypes = {
  produto: PropTypes.array,
  setProduto: PropTypes.func,
  produtos: PropTypes.array,
  isLoading: PropTypes.bool,
};

ProductFilter.defaultProps = {
  produto: [],
  setProduto: () => {},
  produtos: [],
  isLoading: false,
};

export default ProductFilter;
