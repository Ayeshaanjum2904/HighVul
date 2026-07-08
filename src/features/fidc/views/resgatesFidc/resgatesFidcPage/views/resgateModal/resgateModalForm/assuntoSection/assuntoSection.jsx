import React from 'react';
import PropTypes from 'prop-types';
import FormInput from 'common/controls/input/formInput';
import TextEditor from 'common/controls/textEditor';
import {
  Content, ErrorLabel, Header, Message, Title,
} from './assuntoSection.style';

const AssuntoSection = ({
  openCopy,
  form,
  setForm,
}) => {
  const setValue = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const errorTitulo = form.titulo === null;
  const errorMessage = form.textoMensagem === '<p><br></p>';

  return (
    <Content>
      <Header>
        1. Assunto e mensagem do resgate de cotas no FIDC:
      </Header>
      <Title color={errorTitulo}>
        <FormInput
          type="text"
          label="Assunto da mensagem*"
          value={form.titulo}
          setValue={(value) => {
            setValue('titulo', value);
          }}
          disabled={!openCopy}
        />
        {errorTitulo
        && <ErrorLabel>Favor inserir o assunto na mensagem</ErrorLabel>}
      </Title>
      <Message color={errorMessage}>
        <TextEditor
          corpo={form.textoMensagem}
          updateValue={(value) => {
            setValue('textoMensagem', value);
          }}
          label="Texto da mensagem*"
          disabled={!openCopy}
          errorMessage={errorMessage}
        />
      </Message>
    </Content>
  );
};

AssuntoSection.propTypes = {
  form: PropTypes.shape({
    titulo: PropTypes.string,
    textoMensagem: PropTypes.string,
    inicioVigencia: PropTypes.string,
    fimVigencia: PropTypes.string,
  }),
  setForm: PropTypes.func,
  openCopy: PropTypes.bool,
};

AssuntoSection.defaultProps = {
  form: {
    titulo: null,
    textoMensagem: null,
    inicioVigencia: null,
    fimVigencia: null,
  },
  setForm: () => {},
  openCopy: false,
};

export default AssuntoSection;
