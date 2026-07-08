import React from 'react';
import PropTypes from 'prop-types';

import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { trackedProperties } from 'modules';

const dictionary = () => ({
  singular: 'regional',
  plural: 'regionais',
  type: 'a',
});

const SelectRegionalGruposPage = ({
  regional, updateFiltersProperty, regionalList, isLoading,
}) => (
  <NewMultipleSelectComponent
    options={regionalList}
    setOption={(r) => {
      updateFiltersProperty('regional', r === 'all' ? null : r);
    }}
    selectedOption={regional}
    label="Regional"
    dictionary={dictionary()}
    mixpanelPage={trackedProperties.gruposPage}
    mixpanelType="regional"
    disabled={isLoading}
    dataCy="regional"
    minWidth={200}
    startWithAllSelected={false}
  />
);

SelectRegionalGruposPage.propTypes = {
  regional: PropTypes.array,
  updateFiltersProperty: PropTypes.func,
  regionalList: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectRegionalGruposPage.defaultProps = {
  regional: null,
  updateFiltersProperty: () => {},
  regionalList: null,
  isLoading: false,
};

export default SelectRegionalGruposPage;
