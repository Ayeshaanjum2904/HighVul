import React from 'react';
import PropTypes from 'prop-types';
import UploadFileButton from 'common/controls/uploadFileButton';
import FileIcon from '@material-ui/icons/Folder';
import colors from 'assets/styles/colors';

const UploadImagem = ({
  uploadImagem, isLoading, accept,
}) => (
  <UploadFileButton
    isLoading={isLoading}
    onSubmit={uploadImagem}
    accept={accept}
    mixpanelAction="Upload Imagem do alerta"
  >
    <FileIcon style={{ color: colors.secundary_color_700 }} />
  </UploadFileButton>
);

UploadImagem.propTypes = {
  uploadImagem: PropTypes.func,
  isLoading: PropTypes.bool,
  accept: PropTypes.string,
};

UploadImagem.defaultProps = {
  uploadImagem: () => {},
  isLoading: false,
  accept: null,
};

export default UploadImagem;
