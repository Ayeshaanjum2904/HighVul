import React from 'react';

import './conteudoSection.scss';

import InputTitulo from './inputTitulo';
import InputMensagem from './inputMensagem';
import InputImagem from './inputImagem';

const ConteudoSection = () => (
  <div className="alertas__modal-form__conteudo">
    <div className="alertas__modal-form__conteudo_header">
      1. Preencha o conteúdo que será exibido no alerta:
    </div>
    <div className="alertas__modal-form__conteudo_titulo">
      <InputTitulo />
    </div>
    <div className="alertas__modal-form__conteudo_mensagem">
      <InputMensagem />
    </div>
    <div className="alertas__modal-form__conteudo_anexar">
      <InputImagem />
    </div>
  </div>
);

ConteudoSection.propTypes = {
};

ConteudoSection.defaultProps = {
};

export default ConteudoSection;
