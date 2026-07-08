import React from 'react';
import PropTypes from 'prop-types';

import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'conc.',
  plural: 'conc.',
  type: 'a',
});

const ConcessionariaFilter = ({
  concessionaria, setConcessionaria, concessionarias, isLoading,
}) => (

  <NewMultipleSelectComponent
    options={concessionarias}
    setOption={setConcessionaria}
    selectedOption={concessionaria}
    label="Concessionaria"
    dictionary={dictionary()}
    disabled={isLoading}
    dataCy="concessionaria"
    minWidth={200}
  />
);

ConcessionariaFilter.propTypes = {
  concessionaria: PropTypes.array,
  setConcessionaria: PropTypes.func,
  concessionarias: PropTypes.array,
  isLoading: PropTypes.bool,
};

ConcessionariaFilter.defaultProps = {
  concessionaria: [],
  setConcessionaria: () => {},
  concessionarias: [],
  isLoading: false,
};

export default ConcessionariaFilter;
