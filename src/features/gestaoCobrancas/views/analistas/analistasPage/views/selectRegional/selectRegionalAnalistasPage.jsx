import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { CircularProgress } from '@mui/material';
import { LoadingContainer } from 'features/dashboard/dashboardLiquidadas/views/relatorioFidcFilters/relatorioFidcFilters.style';

const dictRegionais = {
  singular: 'regional',
  plural: 'regionais',
  type: 'a',
};

const SelectRegionalAnalistasPage = ({
  regional, setRegional, regionalList, isLoading, resetStore,
}) => (
  isLoading && resetStore
    ? (
      <LoadingContainer>
        <CircularProgress color="inherit" size="18px" />
      </LoadingContainer>
    )
    : (
      <NewMultipleSelectComponent
        options={regionalList}
        setOption={(values) => setRegional(values)}
        selectedOption={regional}
        label="Regional"
        dictionary={dictRegionais}
        minWidth={236}
        mixpanelPage={trackedProperties.analistasPage}
        mixpanelType="regional"
        dataCy="filter-regionais"
      />
    )
);

SelectRegionalAnalistasPage.propTypes = {
  regional: PropTypes.array,
  setRegional: PropTypes.func,
  regionalList: PropTypes.array,
  isLoading: PropTypes.bool,
  resetStore: PropTypes.bool,
};

SelectRegionalAnalistasPage.defaultProps = {
  regional: [],
  setRegional: () => {},
  regionalList: null,
  isLoading: false,
  resetStore: false,
};

export default SelectRegionalAnalistasPage;
