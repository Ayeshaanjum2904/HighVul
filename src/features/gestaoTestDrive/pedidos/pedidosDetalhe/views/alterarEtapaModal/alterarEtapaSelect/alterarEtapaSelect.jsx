import React from 'react';
import PropTypes from 'prop-types';
import SelectAndSearchPush from 'common/controls/selectAndSearchPush/selectAndSearchPush';
import { CircularProgress } from '@material-ui/core';

const AlterarEtapaSelect = ({
  option, setOption, etapas, etapaIsLoading,
}) => (!etapaIsLoading
  ? (
    <SelectAndSearchPush
      singleOption={etapas.length === 1 ? etapas : null}
      options={etapas.length > 1 ? etapas : [{}]}
      option={option}
      setOption={setOption}
      placeHolder="Selecione um status"
      label="Status"
      searchPlaceHolder="Buscar status"
    />
  )
  : (
    <div className="dashboard__page__filter__content_loading-container">
      <CircularProgress
        className="dashboard__page__filter__content_loading"
        color="inherit"
        size="18px"
      />
    </div>
  ));

AlterarEtapaSelect.propTypes = {
  option: PropTypes.array,
  setOption: PropTypes.func,
  etapas: PropTypes.array,
  etapaIsLoading: PropTypes.bool,
};

AlterarEtapaSelect.defaultProps = {
  option: {},
  setOption: () => {},
  etapas: {},
  etapaIsLoading: false,
};

export default AlterarEtapaSelect;
