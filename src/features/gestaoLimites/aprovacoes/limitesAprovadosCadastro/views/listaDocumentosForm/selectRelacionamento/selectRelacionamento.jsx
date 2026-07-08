import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@material-ui/core';
import SelectAndSearchComponent from 'common/controls/selectAndSearchComponent/selectAndSearchComponent';

const SelectRelacionamento = ({
  tipoRelacionamentos, isLoadingTipoRelacionamento,
  isError, handleRelationChange, selectedRelation,
}) => (
  !isLoadingTipoRelacionamento
    ? (
      <SelectAndSearchComponent
        fieldKey="documentos"
        label="Relacionamento"
        placeHolder="Selecione um relacionamento"
        searchPlaceHolder="Pesquisar"
        option={selectedRelation}
        setOption={handleRelationChange}
        options={tipoRelacionamentos}
        isError={isError}
        width={240}
      />
    )
    : (
      <div style={{ marginBottom: '32px' }}>
        <CircularProgress color="inherit" size="18px" />
      </div>
    )
);

SelectRelacionamento.propTypes = {
  handleRelationChange: PropTypes.func,
  tipoRelacionamentos: PropTypes.array,
  selectedRelation: PropTypes.array,
  isError: PropTypes.bool,
  isLoadingTipoRelacionamento: PropTypes.bool,
};

SelectRelacionamento.defaultProps = {
  handleRelationChange: () => {},
  tipoRelacionamentos: [],
  isError: false,
  isLoadingTipoRelacionamento: false,
  selectedRelation: [],
};

export default SelectRelacionamento;
