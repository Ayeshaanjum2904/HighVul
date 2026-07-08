import React from 'react';
import PropTypes from 'prop-types';

import PreviewFileButton from 'common/controls/previewFileButton';

const PreviewImagem = ({ isLoading, onClick, hasImagem }) => (
  <PreviewFileButton
    disabled={isLoading || !hasImagem}
    onClick={onClick}
    mixpanelAction="Preview Imagem do alerta"
  />
);

PreviewImagem.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  hasImagem: PropTypes.bool,
};

PreviewImagem.defaultProps = {
  isLoading: false,
  hasImagem: false,
};

export default PreviewImagem;
