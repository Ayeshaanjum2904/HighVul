import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import useCustomFetch from 'hooks/useFetch';
import service from '../../redux/service';

const dictionary = () => ({
  singular: 'concessionária',
  plural: 'concessionárias',
  type: 'a',
});

const SelectConcessionaria = ({
  concessionaria, setConcessionaria, setIsFirstPageLoad,
}) => {
  const [{ loading, data }] = useCustomFetch(() => service.getConcessionariasFilter());

  return (
    <NewMultipleSelectComponent
      options={data}
      setOption={setConcessionaria}
      onSelected={setIsFirstPageLoad}
      selectedOption={concessionaria}
      label="Concessionária"
      mixpanelPage={trackedProperties.pedidosPage}
      mixpanelType="concessionaria"
      disabled={loading}
      dictionary={dictionary()}
      dataCy="concessionarias"
      minWidth={200}
    />
  );
};

SelectConcessionaria.propTypes = {
  concessionaria: PropTypes.array,
  setConcessionaria: PropTypes.func.isRequired,
  setIsFirstPageLoad: PropTypes.func,
};

SelectConcessionaria.defaultProps = {
  concessionaria: [],
  setIsFirstPageLoad: () => { },
};

export default SelectConcessionaria;
