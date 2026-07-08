import React from 'react';
import PropTypes from 'prop-types';
import { trackedProperties } from 'modules';
import { CircularProgress } from '@material-ui/core';
import MultipleSelectGroup from '../../../../../../../common/controls/newMultipleSelectComponent/multipleSelectGroup/multipleSelectGroup';

const dictionary = () => ({
  singular: 'ponto de venda',
  plural: 'pontos de venda',
  type: 'o',
});

const PontoVendaSelector = ({
  pontos, selectedPontos, setPontos,
  pontosIsLoading,
}) => (
  !pontosIsLoading
    ? (
      <MultipleSelectGroup
        options={pontos}
        setOption={setPontos}
        selectedOption={selectedPontos}
        label="Pontos de venda"
        dataCy="seletor-dashboard-ponto-venda"
        dictionary={dictionary()}
        mixpanelPage={trackedProperties.dashboardPage}
        mixpanelType="ponto"
        startWithAllSelected={false}
      />
    )
    : (
      <div className="dashboard__page__filter__content_loading-container">
        <CircularProgress className="dashboard__page__filter__content_loading" color="inherit" size="18px" />
      </div>
    )
);

PontoVendaSelector.propTypes = {
  setPontos: PropTypes.func,
  selectedPontos: PropTypes.array,
  pontos: PropTypes.array,
  pontosIsLoading: PropTypes.bool,
};

PontoVendaSelector.defaultProps = {
  setPontos: () => {},
  selectedPontos: null,
  pontos: [],
  pontosIsLoading: false,
};

export default PontoVendaSelector;
