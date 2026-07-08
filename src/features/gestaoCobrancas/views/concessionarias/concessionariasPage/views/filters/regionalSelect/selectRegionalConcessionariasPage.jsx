import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';

import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'regional',
  plural: 'regionais',
  type: 'a',
});

const SelectRegionalConcessionariasPage = ({
  regional, setRegional, regionalList, isLoading,
}) => (
  <NewMultipleSelectComponent
    dictionary={dictionary()}
    label="Regional"
    dataCy="seletor-regional"
    options={regionalList}
    selectedOption={regional}
    setOption={(r) => {
      setRegional(r === 'all' ? null : r);
    }}
    mixpanelPage={trackedProperties.concessionariasPage}
    mixpanelType="regional"
    minWidth={200}
    disabled={isLoading}
    startWithAllSelected={false}
    showSearchInput
  />
);

SelectRegionalConcessionariasPage.propTypes = {
  regional: PropTypes.array,
  setRegional: PropTypes.func,
  regionalList: PropTypes.array,
  isLoading: PropTypes.bool,

};

SelectRegionalConcessionariasPage.defaultProps = {
  regional: null,
  setRegional: () => {},
  regionalList: null,
  isLoading: false,

};

export default SelectRegionalConcessionariasPage;
