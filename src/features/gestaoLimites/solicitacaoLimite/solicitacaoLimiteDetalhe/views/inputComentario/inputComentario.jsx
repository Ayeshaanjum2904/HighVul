import React from 'react';
import PropTypes from 'prop-types';

import ComentarioInput from 'common/controls/inputComentario';

import { trackedProperties } from 'modules';

const InputComentario = ({
  mensagem, updateMessage, sendComentario, isLoading, isLoadingModal,
}) => (
  <ComentarioInput
    value={mensagem}
    disabled={isLoadingModal}
    isLoading={isLoading}
    setValue={updateMessage}
    placeholder="Escreva aqui seu comentário"
    sendComentario={sendComentario}
    mixpanelPage={trackedProperties.limitesPage}
  />
);

InputComentario.propTypes = {
  updateMessage: PropTypes.func,
  mensagem: PropTypes.string,
  sendComentario: PropTypes.func,
  isLoading: PropTypes.bool,
  isLoadingModal: PropTypes.bool,
};

InputComentario.defaultProps = {
  updateMessage: () => {},
  mensagem: null,
  sendComentario: () => {},
  isLoading: false,
  isLoadingModal: false,
};

export default InputComentario;
