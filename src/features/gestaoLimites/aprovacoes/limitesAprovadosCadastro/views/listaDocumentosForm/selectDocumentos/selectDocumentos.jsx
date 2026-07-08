import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@material-ui/core';
import MultSelectForm from 'common/controls/multSelectForm/multSelectForm';

const SelectDocumentos = ({
  tipoDocumentos, isLoadingTipoDocumentos, control,
  isError, setValue, selectedDocuments,
}) => (
  !isLoadingTipoDocumentos
    ? (
      <MultSelectForm
        name="documentos"
        label="Documentos"
        options={tipoDocumentos}
        control={control}
        isError={isError}
        setValue={setValue}
        selectedDocuments={selectedDocuments}
        disableSelectAll
      />
    )
    : (
      <div style={{ marginBottom: '32px' }}>
        <CircularProgress color="inherit" size="18px" />
      </div>
    )
);

SelectDocumentos.propTypes = {
  control: PropTypes.func,
  setValue: PropTypes.func,
  tipoDocumentos: PropTypes.array,
  selectedDocuments: PropTypes.array,
  isError: PropTypes.bool,
  isLoadingTipoDocumentos: PropTypes.bool,
};

SelectDocumentos.defaultProps = {
  control: () => {},
  setValue: () => {},
  tipoDocumentos: [],
  isError: false,
  isLoadingTipoDocumentos: false,
  selectedDocuments: [],
};

export default SelectDocumentos;
