import React from 'react';
import PropTypes from 'prop-types';

import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { trackedProperties } from 'modules';

const dictionary = () => ({
  singular: 'regional',
  plural: 'regionais',
  type: 'a',
});

const RegionalSelect = ({
  regional, setRegional, regionalList, isLoading,
}) => (
  <NewMultipleSelectComponent
    options={regionalList}
    setOption={(r) => {
      setRegional(r === 'all' ? null : r);
    }}
    selectedOption={regional}
    label="Regional"
    dictionary={dictionary()}
    mixpanelPage={trackedProperties.historicoPage}
    mixpanelType="regional"
    disable={isLoading}
    dataCy="regional"
    minWidth={200}
    startWithAllSelected={false}
  />
);

RegionalSelect.propTypes = {
  regional: PropTypes.array,
  setRegional: PropTypes.func,
  regionalList: PropTypes.array,
  isLoading: PropTypes.bool,
};

RegionalSelect.defaultProps = {
  regional: null,
  setRegional: () => {},
  regionalList: null,
  isLoading: false,
};

export default RegionalSelect;
