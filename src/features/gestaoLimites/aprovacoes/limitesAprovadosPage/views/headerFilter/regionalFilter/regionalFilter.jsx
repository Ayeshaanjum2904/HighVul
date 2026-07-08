import React from 'react';
import PropTypes from 'prop-types';

import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'regional',
  plural: 'regionais',
  type: 'a',
});

const RegionalFilter = ({
  regional, setRegional, regionais, isLoading,
}) => (

  <NewMultipleSelectComponent
    options={regionais}
    setOption={setRegional}
    selectedOption={regional}
    label="Regional"
    dictionary={dictionary()}
    disabled={isLoading}
    dataCy="regionais"
    minWidth={200}
  />
);

RegionalFilter.propTypes = {
  regional: PropTypes.array,
  setRegional: PropTypes.func,
  regionais: PropTypes.array,
  isLoading: PropTypes.bool,
};

RegionalFilter.defaultProps = {
  regional: [],
  setRegional: () => {},
  regionais: [],
  isLoading: false,
};

export default RegionalFilter;
