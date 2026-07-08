import React from 'react';
import PropTypes from 'prop-types';
import { trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import useCustomFetch from 'hooks/useFetch';
import service from '../../redux/service';

const dictionary = () => ({
  singular: 'veículo',
  plural: 'veículos',
  type: 'o',
});

const SelectVeiculo = ({
  veiculo, setVeiculo, setIsFirstPageLoad,
}) => {
  const [{ loading, data }] = useCustomFetch(() => service.getMvsNome());

  return (
    <NewMultipleSelectComponent
      options={data}
      setOption={setVeiculo}
      onSelected={setIsFirstPageLoad}
      selectedOption={veiculo}
      label="Veículos"
      mixpanelPage={trackedProperties.pedidosPage}
      mixpanelType="veiculo"
      disabled={loading}
      dictionary={dictionary()}
      dataCy="veiculos"
      minWidth={200}
    />
  );
};

SelectVeiculo.propTypes = {
  veiculo: PropTypes.array,
  setVeiculo: PropTypes.func.isRequired,
  setIsFirstPageLoad: PropTypes.func,
};

SelectVeiculo.defaultProps = {
  veiculo: [],
  setIsFirstPageLoad: () => { },
};

export default SelectVeiculo;
