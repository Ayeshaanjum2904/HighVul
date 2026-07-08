import React from 'react';
import PropTypes from 'prop-types';
import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';

const options = [
  { label: 'Todos os usuários', value: false },
  { label: 'Somente Minhas', value: true },
];

const SelectUsuario = ({
  usuario, setUsuario,
}) => (
  <NewBasicSelect
    selectedOption={usuario}
    setOption={setUsuario}
    options={options}
    renderAllOptions={false}
    defaultValue={false}
    labelAll="Todos os usuários"
    nameLabel="Usuários"
  />
);

SelectUsuario.propTypes = {
  usuario: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  setUsuario: PropTypes.func.isRequired,
};

SelectUsuario.defaultProps = {
  usuario: false,
};

export default SelectUsuario;
