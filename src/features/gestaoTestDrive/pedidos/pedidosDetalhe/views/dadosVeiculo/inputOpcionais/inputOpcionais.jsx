import React from 'react';
import PropTypes from 'prop-types';
import InputTaglist from 'common/controls/inputTaglist';

const InputOpcionais = ({
  opcionais, updateOpcionais, camposEditaveis, onValidationChange,
}) => {
  const disabled = !camposEditaveis?.includes('DetalhesVeiculo');

  const handleChange = (tags) => {
    updateOpcionais('opcionais', tags);
  };

  return (
    <InputTaglist
      label="Opcionais"
      labelFontSize="11px"
      labelColor="#595669"
      placeholder="Insira os opcionais separados por ; (ponto e vírgula)."
      value={opcionais}
      onChange={handleChange}
      disabled={disabled}
      maxLength={10}
      delimiter=";"
      tagSize="small"
      allowDuplicatesTags={false}
      onValidationChange={onValidationChange}
    />
  );
};

InputOpcionais.propTypes = {
  opcionais: PropTypes.arrayOf(PropTypes.string),
  updateOpcionais: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
  onValidationChange: PropTypes.func,
};

InputOpcionais.defaultProps = {
  opcionais: [],
  updateOpcionais: () => { },
  camposEditaveis: [],
  onValidationChange: null,
};

export default InputOpcionais;
