import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import UploadDocumento from 'common/controls/fileButton/uploadDocumento';
import { clearNovaOrdemErrors, resetValidacaoOrdem } from '../../../../redux/actions';
import operations from '../../../../redux/operations';

const UploadArquivoOrdem = ({
  control, disabled, dispatch, isValidating,
}) => {
  const createDocumentObject = (file) => ({
    file,
    nome: file.name,
    nomeOriginal: file.name,
    tamanho: (file.size / (1024 * 1024)).toFixed(2),
    isLoading: false,
    isError: false,
    textoErro: null,
  });

  const handleUploadDocumento = (onChange) => (file) => {
    const documentoObj = createDocumentObject(file);
    onChange(documentoObj);
    dispatch(operations.validarOrdem(documentoObj));
  };

  const handleDeleteDocumento = (onChange) => () => {
    onChange(null);
    dispatch(clearNovaOrdemErrors());
    dispatch(resetValidacaoOrdem());
  };

  return (
    <Controller
      name="arquivo"
      control={control}
      render={({ field: { onChange, value } }) => (
        <UploadDocumento
          label="Arquivo"
          placeholder="Insira um documento"
          accept=".xls,.xlsx"
          width="100%"
          maxWidth="120px"
          maxSizeMB={5}
          showDeleteButton
          validateAllTypes
          disabled={disabled}
          isLoading={isValidating}
          uploadDocumento={handleUploadDocumento(onChange)}
          deleteDocumento={handleDeleteDocumento(onChange)}
          documento={value}
        />
      )}
    />
  );
};

UploadArquivoOrdem.propTypes = {
  control: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  isValidating: PropTypes.bool,
};

UploadArquivoOrdem.defaultProps = {
  disabled: false,
  isValidating: false,
};

export default UploadArquivoOrdem;
