import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, ButtonBase } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CircularProgress from '@material-ui/core/CircularProgress';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import TooltipMessage from 'common/controls/tooltipMessage';
import {
  BoxBotao, TextoDocumento, TamanhoDocumento, useStyles,
} from './fileButton.style';
import { IconButtonTooltip } from '../iconButtonTooltip/iconButtonTooltip';

const FileButton = ({
  label,
  disabled,
  isLoading,
  accept,
  nome,
  tamanho,
  uploadFile,
  downloadFile,
  deleteFile,
  erro,
  textoErro,
  placeholder,
  showDeleteButton,
  width,
  maxWidth,
  hideLabel,
}) => {
  const fileInput = useRef();

  const isDocumentoAnexado = Boolean(nome && tamanho);

  const getBorderColor = () => {
    if (erro) return '#C31E10';
    if (isDocumentoAnexado) return '#206446';
    return '#E5E6F25C';
  };
  const getPlaceholder = () => {
    if (isDocumentoAnexado) return `${nome}`;
    return placeholder;
  };

  const onClickButton = async () => {
    if (isDocumentoAnexado) {
      await downloadFile();
    }
    if (!disabled && !isDocumentoAnexado) {
      fileInput.current.value = null;
      fileInput.current.click();
    }
  };

  const onChangeInput = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      uploadFile(e.target.files[0]);
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.updateButton}>
      {label && !hideLabel
    && (
      <span className={classes.textoLabel}>
        {label}
      </span>
    )}
      <div className={classes.container}>
        <ButtonBase
          disabled={isLoading || disabled}
          disableRipple
          isLoading={isLoading}
          variant="text"
          onClick={() => { onClickButton(); }}
          style={{ width }}
        >
          <BoxBotao borderColor={getBorderColor()}>
            {isLoading ? (
              <CircularProgress
                size="16px"
                className={classes.icone}
              />
            ) : (
              <AttachFileIcon fontSize="small" className={classes.icone} />
            )}
            <TooltipMessage title={nome} maxWidth="480px">
              <TextoDocumento documentoAnexado={isDocumentoAnexado} maxWidth={maxWidth}>
                {getPlaceholder()}
              </TextoDocumento>
            </TooltipMessage>
            {nome && (
              <TamanhoDocumento>
                (
                {(tamanho)}
                mb)
              </TamanhoDocumento>
            )}
          </BoxBotao>
          {!isDocumentoAnexado && (
          <input
            className={classes.input}
            type="file"
            accept={accept}
            ref={fileInput}
            onChange={onChangeInput}
          />
          )}
        </ButtonBase>
        {(isDocumentoAnexado && showDeleteButton)
        && (
          <Box sx={{ alignContent: 'center', marginLeft: 4 }}>
            <IconButtonTooltip tooltip="Excluir" onClick={deleteFile} padding={4}>
              <CloseRoundedIcon />
            </IconButtonTooltip>
          </Box>
        )}
      </div>
      {textoErro
    && (
      <span className={classes.textoError}>
        {textoErro}
      </span>
    )}
    </div>
  );
};

FileButton.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  erro: PropTypes.bool,
  showDeleteButton: PropTypes.bool,
  hideLabel: PropTypes.bool,
  accept: PropTypes.string,
  uploadFile: PropTypes.func,
  downloadFile: PropTypes.func,
  deleteFile: PropTypes.func,
  nome: PropTypes.string,
  label: PropTypes.string,
  tamanho: PropTypes.string,
  textoErro: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
};

FileButton.defaultProps = {
  isLoading: false,
  disabled: false,
  accept: null,
  erro: false,
  showDeleteButton: false,
  hideLabel: false,
  nome: null,
  width: null,
  maxWidth: '700px',
  tamanho: null,
  label: 'Documento',
  textoErro: null,
  uploadFile: () => {},
  downloadFile: () => {},
  deleteFile: () => {},
  placeholder: 'Insira um documento',
};

export default FileButton;
