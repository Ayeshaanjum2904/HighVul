import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';
import MultSelect from 'common/controls/multSelect/multSelect';

const dictionary = () => ({
  singular: 'produto',
  plural: 'produtos',
  type: 'o',
});

const SelectProdutoPedidosPage = ({
  produto, setProduto, produtos, isLoading, setIsFirstPageLoad,
}) => (
  <MultSelect
    dictionary={dictionary()}
    label="Produto"
    dataCy="seletor-produto"
    selectedOption={produto}
    setOption={setProduto}
    onSelected={setIsFirstPageLoad}
    options={produtos}
    mixpanelPage={trackedProperties.pedidosPage}
    mixpanelType="produto"
    disabled={isLoading}
    minWidth={200}
  />
);

SelectProdutoPedidosPage.propTypes = {
  produto: PropTypes.array,
  setProduto: PropTypes.func,
  setIsFirstPageLoad: PropTypes.func,
  produtos: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectProdutoPedidosPage.defaultProps = {
  produto: [],
  setProduto: () => {},
  setIsFirstPageLoad: () => {},
  produtos: [],
  isLoading: false,
};

export default SelectProdutoPedidosPage;
