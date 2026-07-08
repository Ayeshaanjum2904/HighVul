import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputInscMunicipal = ({
  inscricaoMunicipal, updateGrupoProperty, isEditing,
}) => (
  <FormInput
    type="text"
    label="Inscrição municipal"
    value={inscricaoMunicipal}
    setValue={(value) => {
      updateGrupoProperty('inscricaoMunicipal', value);
    }}
    disabled={!isEditing}
  />
);

InputInscMunicipal.propTypes = {
  updateGrupoProperty: PropTypes.func,
  inscricaoMunicipal: PropTypes.string,
  isEditing: PropTypes.bool,
};

InputInscMunicipal.defaultProps = {
  updateGrupoProperty: () => {},
  inscricaoMunicipal: null,
  isEditing: false,
};

export default InputInscMunicipal;
