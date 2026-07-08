import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { CircularProgress } from '@material-ui/core';
import GrupoOption from 'common/controls/grupoOption/grupoOption';
import { trackedProperties } from 'modules';

const renderItemGrupo = (option) => (
  <GrupoOption
    brand={option.brand}
    dealerName={option.nome}
    dealerId={option.codigoBuc}
  />
);

const dictionary = () => ({
  singular: 'grupo',
  plural: 'grupos',
  type: 'o',
});

const GrupoSelector = ({
  selectedGrupo, grupos, setGrupo, filterPontos, gruposIsLoading,
}) => {
  const debouncedSetPontos = useCallback(debounce(500, async () => {
    await Promise.all([filterPontos()]);
  }), []);
  return (
    !gruposIsLoading
      ? (
        <NewMultipleSelectComponent
          options={grupos}
          setOption={setGrupo}
          selectedOption={selectedGrupo}
          debounced={debouncedSetPontos}
          label="Grupo"
          dataCy="seletor-dashboard-grupo"
          renderItem={renderItemGrupo}
          dictionary={dictionary()}
          mixpanelPage={trackedProperties.dashboardPage}
          mixpanelType="grupo"
          startWithAllSelected={false}
        />
      )
      : (
        <div className="dashboard__page__filter__content_loading-container">
          <CircularProgress className="dashboard__page__filter__content_loading" color="inherit" size="18px" />
        </div>
      )
  );
};

GrupoSelector.propTypes = {
  filterPontos: PropTypes.func,
  setGrupo: PropTypes.func,
  grupos: PropTypes.array,
  selectedGrupo: PropTypes.array,
  gruposIsLoading: PropTypes.bool,
};

GrupoSelector.defaultProps = {
  filterPontos: () => {},
  setGrupo: () => {},
  grupos: [],
  selectedGrupo: null,
  gruposIsLoading: false,
};

export default GrupoSelector;
