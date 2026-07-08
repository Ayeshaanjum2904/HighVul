import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'regional',
  plural: 'regionais',
  type: 'a',
});

const SelectRegiaoPedidosPage = ({
  regiao, setRegiao, regioesList, isLoading, setIsFirstPageLoad,
}) => (

  <NewMultipleSelectComponent
    options={regioesList}
    setOption={setRegiao}
    onSelected={setIsFirstPageLoad}
    selectedOption={regiao}
    label="Regional"
    dictionary={dictionary()}
    mixpanelPage={trackedProperties.dashboardPage}
    mixpanelType="regional"
    disabled={isLoading}
    dataCy="regioes"
    minWidth={200}
  />
);

SelectRegiaoPedidosPage.propTypes = {
  regiao: PropTypes.array,
  setRegiao: PropTypes.func,
  setIsFirstPageLoad: PropTypes.func,
  regioesList: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectRegiaoPedidosPage.defaultProps = {
  regiao: [],
  setRegiao: () => {},
  setIsFirstPageLoad: () => {},
  regioesList: [],
  isLoading: false,
};

export default SelectRegiaoPedidosPage;
