import React from 'react';
import PropTypes from 'prop-types';

import AssuntoInput from './assuntoInput';
import TextEditor from '../../../../../../../common/controls/textEditor';

import './edicaoEmail.scss';

const EdicaoEmail = ({ corpo, updateValue }) => (
  <div className="email-modal__edicao-email__content">
    <div className="email-modal__edicao-email__content_label">
      1. Altere o assunto e a mensagem do e-mail de cobrança
    </div>
    <div className="email-modal__edicao-email__content_assunto">
      <AssuntoInput />
    </div>
    <div className="email-modal__edicao-email__content_corpo">
      <TextEditor
        corpo={corpo}
        updateValue={updateValue}
      />
    </div>
  </div>
);

EdicaoEmail.propTypes = {
  corpo: PropTypes.string,
  updateValue: PropTypes.func,
};

EdicaoEmail.defaultProps = {
  corpo: '',
  updateValue: () => {},
};

export default EdicaoEmail;
