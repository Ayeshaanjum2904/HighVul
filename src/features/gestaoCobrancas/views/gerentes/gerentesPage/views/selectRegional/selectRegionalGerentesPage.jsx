import React from 'react';
import PropTypes from 'prop-types';

import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { trackedProperties } from 'modules';
import LoadingContainer from 'common/layout/inputLoadingContainer/inputLoadingContainer';
import { CircularProgress } from '@mui/material';

const dictionary = () => ({
  singular: 'regional',
  plural: 'regionais',
  type: 'a',
});

const SelectRegionalGerentesPage = ({
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
        dictionary={dictionary()}
        mixpanelPage={trackedProperties.gerentesPage}
        mixpanelType="regional"
        dataCy="regioes"
        minWidth={200}
      />
    )
);

SelectRegionalGerentesPage.propTypes = {
  regional: PropTypes.number,
  setRegional: PropTypes.func,
  regionalList: PropTypes.array,
  isLoading: PropTypes.bool,
  resetStore: PropTypes.bool,
};

SelectRegionalGerentesPage.defaultProps = {
  regional: '',
  setRegional: () => {},
  regionalList: null,
  isLoading: false,
  resetStore: false,
};

export default SelectRegionalGerentesPage;
