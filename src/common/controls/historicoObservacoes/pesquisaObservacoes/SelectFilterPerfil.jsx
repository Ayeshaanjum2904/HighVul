import React from 'react';
import PropTypes from 'prop-types';

import MultSelect from 'common/controls/multSelect/multSelect';

const dictionary = () => ({
  singular: 'mensagem',
  plural: 'mensagens',
  type: 'a',
});

const perfilArray = [
  { label: 'usuarioNome', text: 'Apenas minhas' },
  { label: 'enviarDealer', text: 'Enviado para o dealer' },
  { label: 'financiamento', text: 'Financiamento a rede' },
  { label: 'cadastro', text: 'Cadastro' },
  { label: 'credito', text: 'Crédito' },
  { label: 'juridico', text: 'Jurídico' },
  { label: 'dealer', text: 'Dealer' },
];

const SelectFilterPerfil = ({
  perfil, setPerfil, isLoading,
}) => (
  <MultSelect
    dictionary={dictionary()}
    dataCy="seletor-perfil"
    selectedOption={perfil || []}
    setOption={setPerfil}
    options={perfilArray}
    disabled={isLoading}
  />
);

SelectFilterPerfil.propTypes = {
  perfil: PropTypes.array,
  setPerfil: PropTypes.func,
  isLoading: PropTypes.bool,
};

SelectFilterPerfil.defaultProps = {
  perfil: [],
  setPerfil: () => {},
  isLoading: false,
};

export default SelectFilterPerfil;
