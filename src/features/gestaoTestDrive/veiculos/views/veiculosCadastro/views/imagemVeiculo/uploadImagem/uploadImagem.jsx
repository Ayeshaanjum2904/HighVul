import React from 'react';
import PropTypes from 'prop-types';

import DropDivUpload from 'common/controls/dropDivUpload';
import BackupIcon from '@material-ui/icons/Backup';
import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';
import UploadImageLoading from '../inputUrlVeiculo/uploadImageLoading';

import { uploadImagemStyles } from './uploadImagemStyles';

const useStyles = makeStyles(uploadImagemStyles);

const UploadImagem = ({ isLoading, urlImagem, uploadImagem }) => {
  const classes = useStyles();
  return (
    <DropDivUpload
      className={classes.container}
      accept="image/png, image/jpeg"
      disabled={isLoading || urlImagem !== null}
      uploadFiles={(file) => uploadImagem(file)}
      mixpanelAction="Upload Imagem do veículo"
    >
      <UploadImageLoading
        isLoading={isLoading}
        urlImagem={urlImagem}
      >
        <BackupIcon style={{ color: colors.primary_color_600 }} />
        <div className={classes.text}>
          Arraste ou clique aqui para fazer upload.
        </div>
      </UploadImageLoading>

    </DropDivUpload>
  );
};

UploadImagem.propTypes = {
  isLoading: PropTypes.bool,
  urlImagem: PropTypes.string,
  uploadImagem: PropTypes.func,
};

UploadImagem.defaultProps = {
  isLoading: false,
  urlImagem: null,
  uploadImagem: () => {},
};

export default UploadImagem;
