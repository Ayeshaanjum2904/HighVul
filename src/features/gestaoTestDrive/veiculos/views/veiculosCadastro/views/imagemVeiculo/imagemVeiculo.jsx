import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import ButtonIcon from 'common/controls/buttonIcon';
import colors from 'assets/styles/colors';
import UploadImagem from './uploadImagem';
import InputUrlVeiculo from './inputUrlVeiculo';

import './imagemVeiculo.scss';

const useStyles = makeStyles({
  removeImage: {
    fontSize: '12px',
    marginBottom: '8px',
    color: colors.error_color_200,
    justifyContent: 'flex-end',
    width: '100%',
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

const ImagemVeiculo = ({ urlImagem, deleteImagem }) => {
  const classes = useStyles();
  return (
    <div
      className="veiculos__upload-imagem-veiculo__container"
      data-cy="upload-imagem-veiculos"
    >
      <div className="veiculos__upload-imagem-veiculo__container__header">
        <div className="veiculos__upload-imagem-veiculo__container__header_title">
          Imagem do veículo
        </div>
        <div className="veiculos__upload-imagem-veiculo__container__header_subtitle">
          Escolha qual imagem será apresentada para os usuários na solicitação do veículo.
        </div>
      </div>
      <div className="veiculos__upload-imagem-veiculo__container__content">
        <div className="veiculos__upload-imagem-veiculo__container__content_upload-imagem">
          {urlImagem
            ? (
              <ButtonIcon
                className={classes.removeImage}
                onClick={deleteImagem}
              >
                Remover Imagem
              </ButtonIcon>
            ) : null}
          <UploadImagem />
        </div>
        <div className="veiculos__upload-imagem-veiculo__container__content_url-veiculo">
          <InputUrlVeiculo />
        </div>
      </div>
    </div>
  );
};

ImagemVeiculo.propTypes = {
  urlImagem: PropTypes.string,
  deleteImagem: PropTypes.func,
};

ImagemVeiculo.defaultProps = {
  urlImagem: null,
  deleteImagem: () => {},
};

export default ImagemVeiculo;
