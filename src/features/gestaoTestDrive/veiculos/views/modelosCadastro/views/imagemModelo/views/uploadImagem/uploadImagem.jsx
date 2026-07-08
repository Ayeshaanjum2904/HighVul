import React from 'react';
import PropTypes from 'prop-types';

import DropDivUpload from 'common/controls/dropDivUpload';
import BackupIcon from '@material-ui/icons/Backup';
import { makeStyles } from '@material-ui/styles';

import colors from 'assets/styles/colors';
import UploadImageLoading from './uploadImageLoading';

const useStyles = makeStyles({
  text: {
    width: '128px',
    color: colors.secundary_color_700,
    fontSize: '12px',
    lineHeight: '16px',
    marginTop: '12px',
    textAlign: 'center',
  },
});

const UploadImagem = ({
  isLoading, urlSelecionada, uploadImagem,
}) => {
  const classes = useStyles();
  return (
    <DropDivUpload
      className={classes.container}
      accept="image/png, image/jpeg"
      disabled={isLoading || urlSelecionada !== null}
      uploadFiles={(file) => uploadImagem(file)}
      mixpanelAction="Upload Imagem do modelo"
    >
      <UploadImageLoading
        isLoading={isLoading}
        urlModelo={urlSelecionada}
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
  urlSelecionada: PropTypes.string,
  uploadImagem: PropTypes.func,
};

UploadImagem.defaultProps = {
  isLoading: false,
  urlSelecionada: null,
  uploadImagem: () => {},
};

export default UploadImagem;
