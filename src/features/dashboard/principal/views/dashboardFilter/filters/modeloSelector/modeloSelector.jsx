import React from 'react';
import PropTypes from 'prop-types';

import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { CircularProgress } from '@material-ui/core';

const dictionary = () => ({
  singular: 'modelo',
  plural: 'modelos',
  type: 'o',
});

const ModeloSelector = ({
  modelosIsLoading, selectedModelos, modelos, setModelos,
}) => (
  !modelosIsLoading
    ? (
      <NewMultipleSelectComponent
        options={modelos}
        setOption={setModelos}
        selectedOption={selectedModelos}
        label="Modelo"
        dataCy="seletor-dashboard-modelo"
        dictionary={dictionary()}
        startWithAllSelected={false}
      />
    )
    : (
      <div className="dashboard__page__filter__content_loading-container">
        <CircularProgress className="dashboard__page__filter__content_loading" color="inherit" size="18px" />
      </div>
    )
);

ModeloSelector.propTypes = {
  setModelos: PropTypes.func,
  modelos: PropTypes.array,
  selectedModelos: PropTypes.array,
  modelosIsLoading: PropTypes.bool,
};

ModeloSelector.defaultProps = {
  setModelos: () => {},
  modelos: [],
  selectedModelos: null,
  modelosIsLoading: false,
};

export default ModeloSelector;
