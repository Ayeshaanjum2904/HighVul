import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputInscEstadual = ({
  inscricaoEstadual, updateGrupoProperty, isEditing,
}) => (
  <FormInput
    type="text"
    label="Inscrição estadual"
    value={inscricaoEstadual}
    setValue={(value) => {
      updateGrupoProperty('inscricaoEstadual', value);
    }}
    disabled={!isEditing}
  />
);

InputInscEstadual.propTypes = {
  updateGrupoProperty: PropTypes.func,
  inscricaoEstadual: PropTypes.string,
  isEditing: PropTypes.bool,
};

InputInscEstadual.defaultProps = {
  updateGrupoProperty: () => {},
  inscricaoEstadual: null,
  isEditing: false,
};

export default InputInscEstadual;
