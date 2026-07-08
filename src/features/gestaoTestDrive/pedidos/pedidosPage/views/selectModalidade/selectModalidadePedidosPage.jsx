import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';
import MultSelect from 'common/controls/multSelect/multSelect';
import { defaultModalidade } from 'features/gestaoTestDrive/pedidos/pedidosUtils';

const dictionary = () => ({
  singular: 'modalidade',
  plural: 'modalidades',
  type: 'a',
});

const SelectModalidadePedidosPage = ({
  modalidade, setModalidade, isLoading, setIsFirstPageLoad,
}) => (
  <MultSelect
    dictionary={dictionary()}
    label="Modalidade"
    dataCy="seletor-modalidade"
    selectedOption={modalidade}
    setOption={setModalidade}
    onSelected={setIsFirstPageLoad}
    options={defaultModalidade}
    mixpanelPage={trackedProperties.pedidosPage}
    mixpanelType="modalidade"
    minWidth={200}
    disable={isLoading}
  />
);

SelectModalidadePedidosPage.propTypes = {
  modalidade: PropTypes.array,
  setModalidade: PropTypes.func,
  setIsFirstPageLoad: PropTypes.func,
  isLoading: PropTypes.bool,
};

SelectModalidadePedidosPage.defaultProps = {
  modalidade: [],
  setModalidade: () => {},
  setIsFirstPageLoad: () => {},
  isLoading: false,
};

export default SelectModalidadePedidosPage;
