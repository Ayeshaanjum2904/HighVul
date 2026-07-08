import React from 'react';
import PropTypes from 'prop-types';
import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';

const defaultValues = [
  { value: 'all', label: 'Todas as taxas' },
  { value: 'a.m.', label: 'Ao mês (a.m.)' },
  { value: 'a.d.', label: 'Ao dia (a.d.)' },
];

const SelectTaxaPraticada = ({
  taxaPraticada, setTaxaPraticada, isLoading,
}) => (
  <NewBasicSelect
    nameLabel="Taxas praticadas"
    placeholder=""
    options={defaultValues}
    selectedOption={taxaPraticada || 'all'}
    setOption={setTaxaPraticada}
    renderAllOptions={false}
    disabled={isLoading}
  />
);

SelectTaxaPraticada.propTypes = {
  taxaPraticada: PropTypes.string,
  setTaxaPraticada: PropTypes.func,
  isLoading: PropTypes.bool,
};

SelectTaxaPraticada.defaultProps = {
  taxaPraticada: null,
  setTaxaPraticada: () => {},
  isLoading: false,
};

export default SelectTaxaPraticada;
