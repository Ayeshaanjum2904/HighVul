import React from 'react';
import PropTypes from 'prop-types';

import AlertaMensagem from 'common/layout/alertaMensagem';
import LoadingComponent from 'common/layout/loading';

import { AlertContainer } from './overlays.style';

export const Loading = ({ message }) => (
  <AlertContainer marginBottom="18px">
    <LoadingComponent breakLine delay mensagem={message} />
  </AlertContainer>
);

Loading.propTypes = {
  message: PropTypes.string,
};
Loading.defaultProps = {
  message: 'Estamos buscando os dados. Aguarde um instante...',
};

const renderWarning = (message) => (
  <AlertContainer marginBottom="46px">
    <AlertaMensagem breakLine mensagem={message} />
  </AlertContainer>
);

export const Empty = ({ message }) => renderWarning(message);

Empty.propTypes = {
  message: PropTypes.string,
};
Empty.defaultProps = {
  message: 'Não existem dados para serem exibidos.',
};

export const Error = ({ message }) => renderWarning(message);

Error.propTypes = {
  message: PropTypes.string,
};
Error.defaultProps = {
  message: 'O sistema está indisponível no momento.\nPor favor, tente novamente mais tarde.',
};
