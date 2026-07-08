import React from 'react';
import PropTypes from 'prop-types';

import './contatosModalForm.scss';

import InputNome from './views/inputNome';
import InputTelefone from './views/inputTelefone';
import InputEmail from './views/inputEmail';
import SelectPapel from './views/selectPapel';

const ContatosModalForm = ({ isEditar }) => (
  <div className="contatos__modal-form__content">
    <div className={isEditar
      ? 'contatos__modal-form__content_nome_editar'
      : 'contatos__modal-form__content_nome'}
    >
      <InputNome />
    </div>
    <div className="contatos__modal-form__content_papel">
      <SelectPapel />
    </div>
    <div className="contatos__modal-form__content_email">
      <InputEmail />
    </div>
    <div className="contatos__modal-form__content_telefone">
      <InputTelefone />
    </div>
  </div>
);

ContatosModalForm.propTypes = {
  isEditar: PropTypes.bool,
};

ContatosModalForm.defaultProps = {
  isEditar: false,
};

export default ContatosModalForm;
