import React from 'react';
import PropTypes from 'prop-types';

import TextEditor from 'common/controls/textEditor';

const InputMensagem = ({ mensagem, setMensagem }) => (
  <TextEditor
    corpo={mensagem}
    updateValue={setMensagem}
    label="Texto da mensagem*"
    hasHeight={false}
  />
);

InputMensagem.propTypes = {
  setMensagem: PropTypes.func,
  mensagem: PropTypes.string,
};

InputMensagem.defaultProps = {
  setMensagem: () => {},
  mensagem: null,
};

export default InputMensagem;
