import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Download } from 'react-feather';
import {
  Container, DocumentoInput, DownloadIcon,
  Field, FieldEmpty, NomeDocumento, TamanhoDocumento,
} from './fieldDocumentoCredito.style';

const FieldDocumentoCredito = ({ documento, getDocumentoDownload }) => {
  const filled = !_.isNull(documento) && documento.tamanho;

  const handleDownloadDocumento = () => {
    getDocumentoDownload(documento.id);
  };

  const renderField = () => (filled
    ? (
      <Field onClick={handleDownloadDocumento}>
        <NomeDocumento>{documento?.nomeOriginal}</NomeDocumento>
        <TamanhoDocumento>{` (${documento?.tamanho}Mb)`}</TamanhoDocumento>
        <DownloadIcon><Download width={16} height={16} /></DownloadIcon>
      </Field>
    ) : (
      <FieldEmpty>
        Nenhum arquivo anexado.
      </FieldEmpty>
    ));

  return (
    <Container>
      <DocumentoInput>
        {renderField()}
      </DocumentoInput>
    </Container>
  );
};

FieldDocumentoCredito.propTypes = {
  documento: PropTypes.object,
  getDocumentoDownload: PropTypes.func,
};

FieldDocumentoCredito.defaultProps = {
  documento: null,
  getDocumentoDownload: () => {},
};

export default FieldDocumentoCredito;
