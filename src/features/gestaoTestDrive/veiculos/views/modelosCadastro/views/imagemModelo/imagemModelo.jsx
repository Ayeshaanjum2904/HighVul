import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import ButtonIcon from 'common/controls/buttonIcon';
import colors from 'assets/styles/colors';
import UploadImagem from './views/uploadImagem';
import InputUrlModelo from './views/inputUrlModelo';

import './imagemModelo.scss';

const useStyles = makeStyles({
  removeImage: {
    fontSize: '12px',
    color: colors.error_color_200,
    justifyContent: 'flex-end',
    '&:hover ': {
      color: colors.error_color_400,
      textDecorationLine: 'underline',
    },
    '&:focus ': {
      color: colors.error_color_400,
      textDecorationLine: 'underline',
    },
  },
});

const ImagemModelo = ({ urlSelecionada, deleteImagem }) => {
  const classes = useStyles();
  return (
    <div className="veiculos__upload-imagem-modelo__container">
      <div className="veiculos__upload-imagem-modelo__container__header">
        <div className="veiculos__upload-imagem-modelo__container__header_title">
          Imagem do modelo
        </div>
        <div className="veiculos__upload-imagem-modelo__container__header_subtitle">
          Faça upload da imagem do modelo do veículo.
          {urlSelecionada
            ? (
              <ButtonIcon
                className={classes.removeImage}
                data-cy="removerImagem"
                onClick={deleteImagem}
              >
                Remover Imagem
              </ButtonIcon>
            ) : null}
        </div>
      </div>
      <div className="veiculos__upload-imagem-modelo__container__content">
        <div className="veiculos__upload-imagem-modelo__container__content_upload-imagem">
          <UploadImagem />
        </div>
        <div className="veiculos__upload-imagem-modelo__container__content_url-modelo">
          <InputUrlModelo />
        </div>
      </div>
    </div>
  );
};

ImagemModelo.propTypes = {
  urlSelecionada: PropTypes.string,
  deleteImagem: PropTypes.func,
};

ImagemModelo.defaultProps = {
  urlSelecionada: null,
  deleteImagem: () => {},
};

export default ImagemModelo;
