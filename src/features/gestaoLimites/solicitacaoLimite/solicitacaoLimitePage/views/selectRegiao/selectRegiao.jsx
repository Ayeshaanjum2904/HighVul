import React from 'react';
import PropTypes from 'prop-types';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'regional',
  plural: 'regionais',
  type: 'a',
});

const SelectRegiao = ({
  regiao, setRegiao, regioes, isLoading,
}) => (

  <NewMultipleSelectComponent
    options={regioes}
    setOption={setRegiao}
    selectedOption={regiao}
    label="Regional"
    dictionary={dictionary()}
    disabled={isLoading}
    dataCy="regionais"
    minWidth={200}
  />
);

SelectRegiao.propTypes = {
  regiao: PropTypes.array,
  setRegiao: PropTypes.func,
  regioes: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectRegiao.defaultProps = {
  regiao: [],
  setRegiao: () => {},
  regioes: [],
  isLoading: false,
};

export default SelectRegiao;
